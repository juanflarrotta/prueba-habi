import Box from '@components/box';
import Container from '@components/container';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from './summary-desktop.module.scss';

type Props = {
  steps: {
    key: string;
  }[];
};

const SummaryDesktop = ({ steps }: Props): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage) {
      setData(getLocalStorage);
    }
  }, [steps]);

  return (
    <div className={`${styles.summary}`}>
      <Container className="container--desktop">
        <ul className={`${styles.summary__list}`}>
          {steps.map((step, index) => {
            return (
              <li className={styles.summary__item} key={index}>
                <Box className="box--item">
                  <h4 className={styles.summary__title}>{step.key}:</h4>
                  <span className={styles.summary__text}>{data[step.key]}</span>
                </Box>
              </li>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default SummaryDesktop;
