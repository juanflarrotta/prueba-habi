import React, { ReactElement, ReactNode } from 'react';
import styles from './container.module.scss';

type Props = {
  children: ReactNode;
  className?: string;
};
const Container = ({ children, className }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';

  return <div className={`${styles.container} ${newClass}`}>{children}</div>;
};

export default Container;
