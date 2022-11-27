import React, { ReactElement, ReactNode } from 'react';
import styles from './btn.module.scss';

type Props = {
  text?: string;
  clickHandler?: () => void;
  disabled?: boolean;
  className?: string;
  children?: ReactNode;
};
const Btn = ({ text, clickHandler, disabled, className, children }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';
  return (
    <button
      type="button"
      className={`${styles.btn} ${newClass}`}
      onClick={clickHandler}
      disabled={disabled}
    >
      {children}
      {text && <span className={styles.btn__text}>{text}</span>}
    </button>
  );
};
export default Btn;
