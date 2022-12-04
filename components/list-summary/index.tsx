import Link from 'next/link';
import React, { ReactElement, useEffect, useState } from 'react';
import styles from './list-summary.module.scss';
import { formatValue } from 'react-currency-input-field';

type Props = {
  steps: {
    key: string;
    title: string;
    path: string;
  }[];
  className?: string;
};

const ListSummary = ({ steps, className }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';
  const [data, setData] = useState([]);

  const textValue = step => {
    if (data[step.key] && typeof data[step.key] === 'object') {
      const values = data[step.key].map((value, index) => {
        return (
          <span className={styles.summary__text} key={`${value}${index}`}>
            {value}
          </span>
        );
      });
      return values;
    } else {
      if (step.key === 'monto') {
        const formattedValue = formatValue({
          value: data[step.key],
          groupSeparator: ',',
          decimalSeparator: '.',
          prefix: '$',
        });

        return <span className={styles.summary__text}>{formattedValue}</span>;
      }
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
    <ul className={`${styles.summary__list} ${newClass}`}>
      {steps.map((step, index) => {
        return (
          <li className={styles.summary__item} key={`step${index}`}>
            <Link href={`/vender/${step.path}`}>
              <h4 className={styles.summary__title}>{step.title}:</h4>
            </Link>
            {textValue(step)}
          </li>
        );
      })}
    </ul>
  );
};

export default ListSummary;
