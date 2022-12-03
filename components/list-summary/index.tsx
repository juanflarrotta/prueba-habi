import React, { ReactElement, useEffect, useState } from 'react';
import styles from './list-summary.module.scss';

type Props = {
  steps: {
    key: string;
  }[];
};

const ListSummary = ({ steps }: Props): ReactElement => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage) {
      setData(getLocalStorage);
    }
  }, [steps]);

  return (
    <ul className={`${styles.summary__list}`}>
      {steps.map((step, index) => {
        return (
          <li className={styles.summary__item} key={index}>
            <h4 className={styles.summary__title}>{step.key}:</h4>
            <span className={styles.summary__text}>{data[step.key]}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ListSummary;
