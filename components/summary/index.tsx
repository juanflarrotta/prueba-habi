import Btn from '@components/btn';
import ListSummary from '@components/list-summary';
import React, { ReactElement } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './summary.module.scss';

type Props = {
  className?: string;
  steps: {
    key: string;
    title: string;
    path: string;
  }[];
  clickHandler?: () => void;
};

const Summary = ({ className, steps, clickHandler }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';

  return (
    <div className={`${styles.summary} ${newClass}`}>
      <Btn clickHandler={clickHandler} className="btn--back">
        <FaTimes size="1.5em" />
      </Btn>
      <ListSummary steps={steps} />
    </div>
  );
};

export default Summary;
