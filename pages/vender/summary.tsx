import React, { ReactElement, useState } from 'react';
import Btn from '@components/btn';
import ListSummary from '@components/list-summary';
import { TEXTS } from '@constants/index';
import { useEffect } from 'react';
import { Steps } from 'types';
import { sortData } from 'utils/functions';
import styles from '@styles/summary.module.scss';
import { useRouter } from 'next/router';

type Props = {
  steps: Steps;
};

const SummaryFinish = ({ steps }: Props): ReactElement => {
  const [dataLocalStorage, setDataLocalStorage] = useState({});
  const sortSteps = sortData(steps);
  const router = useRouter();

  const validateData = () => {
    const validate = sortSteps.filter(step => {
      if (!dataLocalStorage[step.key]) {
        return true;
      }
    });

    if (validate.length !== 0 && validate[0].validate.required.value === true) {
      alert(`Falta completar el campo ${validate[0].title}`);
    } else {
      const getLocalStorageApartments = JSON.parse(localStorage.getItem('apartments'));
      if (getLocalStorageApartments !== null) {
        getLocalStorageApartments.push(dataLocalStorage);
        localStorage.setItem('apartments', JSON.stringify(getLocalStorageApartments));
      } else {
        localStorage.setItem('apartments', JSON.stringify([dataLocalStorage]));
      }
      localStorage.removeItem('keysSteps');
      router.push(`/`);
    }
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage) {
      setDataLocalStorage(getLocalStorage);
    }
  }, []);
  return (
    <div className={styles.summary}>
      <ListSummary steps={sortSteps} />
      <Btn text={TEXTS.finish} type="button" className="btn--next" clickHandler={validateData} />
    </div>
  );
};

export default SummaryFinish;

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
