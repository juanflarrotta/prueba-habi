import InputText from '@components/input-text';
import { selectValueSteps } from '@redux/slices/stepsSlice';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styles from './step.module.scss';

type Props = {
  step: {
    description: string;
    step: number;
    typeInput: string;
    title: string;
    key: string;
    validate: {
      value: boolean;
      message: string;
    };
  };
  position: number;
};

const Step = ({ step, position }: Props): ReactElement => {
  const steps = useSelector(selectValueSteps);

  const inputs = {
    text: () => (
      <InputText label={step.title} name={step.key} position={position} validate={step.validate} />
    ),
  };

  return (
    <div className={styles.step}>
      <h3 className={styles.step__title}>{`Paso ${step.step} de ${steps.length}`}</h3>
      <p className={styles.step__description}>{step.description}</p>
      {inputs[step.typeInput] ? inputs[step.typeInput]() : ''}
    </div>
  );
};

export default Step;
