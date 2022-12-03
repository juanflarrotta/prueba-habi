import { selectValueSteps } from '@redux/slices/stepsSlice';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styles from './step.module.scss';

type Props = {
  step: {
    description: string;
    step: number;
  };
};

const Step = ({ step }: Props): ReactElement => {
  const steps = useSelector(selectValueSteps);
  return (
    <div className={styles.step}>
      <h3 className={styles.step__title}>{`Paso ${step.step} de ${steps.length}`}</h3>
      <p className={styles.step__description}>{step.description}</p>
    </div>
  );
};

export default Step;
