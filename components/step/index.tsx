import InputCheckbox from '@components/inputs/input-checkbox';
import InputRadio from '@components/inputs/input-radio';
import InputEmail from '@components/inputs/input-email';
import InputNumber from '@components/inputs/input-number';
import InputText from '@components/inputs/input-text';
import InputCurrency from '@components/inputs/input-currency';
import { selectValueSteps } from '@redux/slices/stepsSlice';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import styles from './step.module.scss';
import InputFile from '@components/inputs/input-file';

type Props = {
  step: {
    description: string;
    step: number;
    typeInput: string;
    title: string;
    key: string;
    validate: {
      required: {
        value: boolean;
        message: string;
      };
    };
    optionInputs: [];
    optionsRadio: {
      text: string;
      inputs: [];
    }[];
  };
  position: number;
};

const Step = ({ step, position }: Props): ReactElement => {
  const steps = useSelector(selectValueSteps);

  const inputs = {
    text: () => (
      <InputText label={step.title} name={step.key} position={position} validate={step.validate} />
    ),
    email: () => (
      <InputEmail label={step.title} name={step.key} position={position} validate={step.validate} />
    ),
    number: () => (
      <InputNumber
        label={step.title}
        name={step.key}
        position={position}
        validate={step.validate}
      />
    ),
    checkbox: () => (
      <InputCheckbox
        label={step.title}
        name={step.key}
        position={position}
        validate={step.validate}
        optionInputs={step.optionInputs}
      />
    ),
    radio: () => (
      <InputRadio
        label={step.title}
        name={step.key}
        position={position}
        validate={step.validate}
        optionsRadio={step.optionsRadio}
      />
    ),
    currency: () => (
      <InputCurrency
        label={step.title}
        name={step.key}
        position={position}
        validate={step.validate}
      />
    ),
    file: () => (
      <InputFile label={step.title} name={step.key} position={position} validate={step.validate} />
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
