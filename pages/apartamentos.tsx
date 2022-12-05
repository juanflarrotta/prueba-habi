import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Background from '@components/background';
import Btn from '@components/btn';
import { TEXTS } from '@constants/index';
import styles from '@styles/apartments.module.scss';
import { FaArrowLeft } from 'react-icons/fa';
import Card from '@components/card';

const Apartments = (): ReactElement => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const backStep = () => {
    router.push(`/`);
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('apartments'));
    if (!getLocalStorage) {
      router.push(`/`);
    } else {
      setLoading(true);
      setData(getLocalStorage);
    }
  }, []);

  return (
    <>
      {loading && (
        <div className={styles.apartments}>
          <Background />
          <div className={styles.apartments__content}>
            <Btn text={TEXTS.back} clickHandler={() => backStep()} className="btn--back">
              <FaArrowLeft />
            </Btn>
            <ul className={styles.apartments__list}>
              {data.map((item, index) => {
                return <Card data={item} key={`card${index}`} />;
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
export default Apartments;
