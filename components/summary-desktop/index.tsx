import React, { ReactElement } from 'react';
import styles from './summary-desktop.module.scss';
import ListSummary from '@components/list-summary';

type Props = {
  steps: {
    key: string;
    title: string;
    path: string;
  }[];
};

const SummaryDesktop = ({ steps }: Props): ReactElement => {
  return (
    <div className={styles.summary}>
      <ListSummary steps={steps} />
    </div>
  );
};

export default SummaryDesktop;
