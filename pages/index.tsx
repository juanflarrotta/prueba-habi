import React, { ReactElement, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setSteps } from 'redux/slices/stepsSlice';

import Background from '@components/background';
import { Steps } from 'types';

type Props = {
  steps: Steps;
};

const Home = ({ steps }: Props): ReactElement => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSteps(steps));
  }, []);

  return (
    <>
      <Background />
    </>
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
