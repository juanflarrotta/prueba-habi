import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';
import { sortData } from 'utils/functions';
import { Steps } from 'types';

import Background from '@components/background';
import Btn from '@components/btn';
import { TEXTS } from '@constants/index';
import styles from '@styles/home.module.scss';

type Props = {
  steps: Steps;
};

const Home = ({ steps }: Props): ReactElement => {
  const router = useRouter();
  const sortSteps = sortData(steps);

  const newSale = () => {
    router.push(`/vender/${sortSteps[0].path}`);
  };

  return (
    <div className={styles.home}>
      <Background />
      <Btn text={TEXTS.sell} clickHandler={newSale} className="btn--bottom" />
    </div>
  );
};
export default Home;

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
