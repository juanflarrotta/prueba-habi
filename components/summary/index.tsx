import Box from '@components/box';
import Btn from '@components/btn';
import Container from '@components/container';
import React, { ReactElement, useEffect, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './summary.module.scss';

type Props = {
  className?: string;
  steps: {
    key: string;
  }[];
  clickHandler?: () => void;
};

const Summary = ({ className, steps, clickHandler }: Props): ReactElement => {
  const [data, setData] = useState([]);
  const newClass = className ? styles[className] : '';

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage) {
      setData(getLocalStorage);
    }
  }, [steps]);

  return (
    <div className={`${styles.summary} ${newClass}`}>
      <Container className="container--modal">
        <Btn clickHandler={clickHandler} className="btn--back" type="button">
          <FaTimes size="1.5em" />
        </Btn>
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

export default Summary;
