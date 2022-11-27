import React, { ReactElement, ReactNode } from 'react';
import styles from './box.module.scss';

type Props = {
  className?: string;
  children?: ReactNode;
};
const Box = ({ className, children }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';
  return <div className={`${styles.box} ${newClass}`}>{children}</div>;
};
export default Box;
