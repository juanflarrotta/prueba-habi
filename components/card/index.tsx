import React, { ReactElement } from 'react';
import { formatValue } from 'react-currency-input-field';
import styles from './card.module.scss';

type Props = {
  data: {
    adress: string;
    monto: string;
  };
};
const Card = ({ data }: Props): ReactElement => {
  const formattedValue = formatValue({
    value: data.monto,
    groupSeparator: ',',
    decimalSeparator: '.',
    prefix: '$',
  });
  return (
    <li className={styles.card}>
      <img src="/images/background-desktop.png" alt="imagen" className={styles.card__image} />
      <div className={styles.card__content}>
        <p className={styles.card__title}>
          Direccion:
          <span className={styles.card__text}>{data.adress}</span>
        </p>
        <p className={styles.card__title}>
          Monto:
          <span className={styles.card__text}>{formattedValue}</span>
        </p>
      </div>
    </li>
  );
};
export default Card;
