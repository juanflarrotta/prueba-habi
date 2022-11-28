import React, { ReactElement, ReactNode } from 'react';
import styles from './layout.module.scss';

type Props = {
  className?: string;
  children?: ReactNode;
};
const Layout = ({ className, children }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';
  return <div className={`${styles.layout} ${newClass}`}>{children}</div>;
};
export default Layout;
