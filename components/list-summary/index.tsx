import React, { ReactElement, useEffect, useState } from 'react';
import styles from './list-summary.module.scss';

type Props = {
  steps: {
    key: string;
    title: string;
  }[];
};

const ListSummary = ({ steps }: Props): ReactElement => {
  const [data, setData] = useState([]);

  const textValue = step => {
    if (data[step.key] && step.typeInput === 'checkbox' && data.length !== 0) {
      const values = step.optionInputs.map((value, index) => {
        if (data[step.key][index] === true) {
          return (
            <span className={styles.summary__text} key={`${value}${index}`}>
              {value}
            </span>
          );
        }
      });
      return values;
    } else {
      return <span className={styles.summary__text}>{data[step.key]}</span>;
    }
  };

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
          <li className={styles.summary__item} key={`step${index}`}>
            <h4 className={styles.summary__title}>{step.title}:</h4>
            {textValue(step)}
          </li>
        );
      })}
    </ul>
  );
};

export default ListSummary;
