import React, { ReactElement, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setSteps } from 'redux/slices/stepsSlice';
import { useRouter } from 'next/router';

import Background from '@components/background';
import { Steps } from 'types';
import Btn from '@components/btn';
import Container from '@components/container';

type Props = {
  steps: Steps;
};

const Home = ({ steps }: Props): ReactElement => {
  const router = useRouter();
  const dispatch = useDispatch();

  const sortSteps = steps.slice().sort((a: { step: number }, b: { step: number }) => {
    return a.step - b.step;
  });

  const newSale = () => {
    router.push(`/vender/${sortSteps[0].path}`);
  };

  useEffect(() => {
    dispatch(setSteps(steps));
  }, []);

  return (
    <Container>
      <Background />
      <Btn text="Vender" clickHandler={() => newSale()} className="btn--bottom" type="button" />
    </Container>
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
