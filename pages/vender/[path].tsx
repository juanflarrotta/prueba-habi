import React, { ReactElement } from 'react';

import { useRouter } from 'next/router';
import Container from '@components/container';
import Btn from '@components/btn';
import { FaArrowLeft } from 'react-icons/fa';

const Home = (): ReactElement => {
  const router = useRouter();

  const backStep = () => {
    router.back();
  };

  return (
    <Container className="container--item">
      <Btn text="Atras" clickHandler={() => backStep()} className="btn--back">
        <FaArrowLeft />
      </Btn>
      <Btn text="Siguiente" className="btn--bottom" />
    </Container>
  );
};
export default Home;
