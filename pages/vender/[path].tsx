import React, { ReactElement, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Btn from '@components/btn';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { setSteps } from 'redux/slices/stepsSlice';
import { Steps } from 'types';
import { setStep } from 'redux/slices/stepSlice';
import Summary from '@components/summary';
import SummaryDesktop from '@components/summary-desktop';
import Step from '@components/step';
import { TEXTS } from '@constants/index';
import styles from '@styles/path.module.scss';
import { sortData } from 'utils/functions';

type Props = {
  steps: Steps;
};

const StepView = ({ steps }: Props): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const sortSteps = sortData(steps);
  const dataStep = sortSteps.filter(step => step.path === router.query.path);

  const positionStep = sortSteps.findIndex(element => {
    if (element.step == dataStep[0].step) {
      return true;
    }
  });

  const backStep = () => {
    if (positionStep === 0) {
      router.push(`/`);
    } else {
      router.push(`/vender/${sortSteps[positionStep - 1].path}`);
    }
  };

  useEffect(() => {
    if (dataStep.length === 0) {
      router.push(`/`);
    } else {
      dispatch(setSteps(sortSteps));
      dispatch(setStep(dataStep[0].step));
      setLoading(true);
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.path}>
          <Btn text={TEXTS.back} clickHandler={() => backStep()} className="btn--back">
            <FaArrowLeft />
          </Btn>
          <Step step={dataStep[0]} position={positionStep} />
          <Btn text={TEXTS.summary} clickHandler={() => setModal(true)} className="btn--float" />
          <SummaryDesktop steps={sortSteps} />
          {modal && <Summary steps={sortSteps} clickHandler={() => setModal(false)} />}
        </div>
      )}
    </>
  );
};
export default StepView;

export async function getServerSideProps() {
  let steps = null;
  try {
    const res = await fetch('http://localhost:3000/api/steps');
    steps = await res.json();
  } catch (error) {
    console.log('Steps fetching error');
    console.log(error);
  }

  return { props: { steps } };
}
