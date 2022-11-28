import Btn from '@components/btn';
import React, { ReactElement } from 'react';
import styles from './step.module.scss';
import { useForm } from 'react-hook-form';
import Checkbox from '@components/checkbox';

type Props = {
  step: {
    title: string;
    key: string;
    typeInput: string;
    optionInputs: [];
    validate: {
      value: boolean | string | number;
      message: string;
    };
  };
  nextStep?: () => void;
  numStep: number;
  numMax: number;
};
const InputListCheckbox = ({ step, nextStep, numStep, numMax }: Props): ReactElement => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[step.key]) {
      getLocalStorage[step.key] = data[step.key];
      localStorage.setItem('keysSteps', JSON.stringify(getLocalStorage));
    } else {
      localStorage.setItem('keysSteps', JSON.stringify({ ...data, ...getLocalStorage }));
    }
    nextStep();
  };

  return (
    <form className={styles.step__form} onSubmit={handleSubmit(onSubmit)}>
      {step.optionInputs.map((option, index) => {
        return (
          <Checkbox
            label={option}
            value={option}
            key={`checkbox${index}`}
            validate={{ ...register(step.key, step.validate) }}
          />
        );
      })}
      {numStep + 1 === numMax ? (
        <Btn text="Finalizar" type="button" className="btn--bottom" />
      ) : (
        <Btn text="Siguiente" type="submit" className="btn--next" />
      )}
    </form>
  );
};
export default InputListCheckbox;
