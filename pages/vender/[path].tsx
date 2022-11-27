import React, { ReactElement, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import Container from '@components/container';
import Btn from '@components/btn';
import { FaArrowLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setSteps } from 'redux/slices/stepsSlice';
import { Steps } from 'types';
import { decrementStep, incrementStep, selectValueStep, setStep } from 'redux/slices/stepSlice';
import Summary from '@components/summary';
import Step from '@components/step';

type Props = {
  steps: Steps;
};

const StepView = ({ steps }: Props): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const router = useRouter();
  const step = useSelector(selectValueStep);
  const dispatch = useDispatch();

  const sortSteps = steps.slice().sort((a: { step: number }, b: { step: number }) => {
    return a.step - b.step;
  });

  const validatePath = sortSteps.filter(a => a.path === router.query.path);

  useEffect(() => {
    if (validatePath.length === 0) {
      router.push(`/`);
    } else {
      const positionStep = sortSteps.findIndex(element => {
        if (element.step == validatePath[0].step) {
          return true;
        }
      });
      setLoading(true);
      dispatch(setSteps(sortSteps));
      dispatch(setStep(positionStep));
    }
  }, []);

  const backStep = () => {
    if (step > 0) {
      dispatch(decrementStep());
      router.push(`/vender/${sortSteps[step - 1].path}`);
    } else {
      router.push(`/`);
    }
  };

  const nextStep = () => {
    if (step < sortSteps.length - 1) {
      dispatch(incrementStep());
      router.push(`/vender/${sortSteps[step + 1].path}`);
    }
  };

  return (
    <Container className="container--item">
      {loading && (
        <>
          <Btn type="button" text="Atras" clickHandler={() => backStep()} className="btn--back">
            <FaArrowLeft />
          </Btn>
          <Step
            step={validatePath[0]}
            numStep={step}
            numMax={sortSteps.length}
            nextStep={nextStep}
          />
          <Btn
            type="button"
            text="Resumen"
            clickHandler={() => setModal(true)}
            className="btn--float"
          />
          {modal && <Summary steps={sortSteps} clickHandler={() => setModal(false)} />}
        </>
      )}
    </Container>
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
