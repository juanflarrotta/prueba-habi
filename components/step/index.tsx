import React, { ReactElement } from 'react';
import styles from './step.module.scss';
import InputDefault from './inputDefault';
import InputCheckbox from './inputCheckbox';
import InputListCheckbox from './inputListCheckbox';
import InputFile from './inputFile';

type Props = {
  step: {
    title: string;
    description: string;
    typeInput: string;
    key: string;
    optionInputs: [];
    optionsCheck: [];
    validate: {
      value: number | string | boolean;
      message: string;
    };
  };
  numStep: number;
  numMax: number;
  nextStep?: () => void;
};
const Step = ({ step, numStep, numMax, nextStep }: Props): ReactElement => {
  const renderForm = () => {
    if (step.optionInputs.length > 0) {
      return (
        <InputListCheckbox step={step} nextStep={nextStep} numStep={numStep} numMax={numMax} />
      );
    } else if (step.typeInput === 'file') {
      return <InputFile step={step} nextStep={nextStep} numStep={numStep} numMax={numMax} />;
    } else if (step.optionsCheck.length > 0) {
      return <InputCheckbox step={step} nextStep={nextStep} numStep={numStep} numMax={numMax} />;
    } else {
      return <InputDefault step={step} nextStep={nextStep} numStep={numStep} numMax={numMax} />;
    }
  };

  return (
    <div className={styles.step}>
      <h3 className={styles.step__title}>{`Paso ${numStep + 1} de ${numMax}`}</h3>
      <p className={styles.step__description}>{step.description}</p>
      {renderForm()}
    </div>
  );
};
export default Step;
