import Btn from '@components/btn';
import React, { ReactElement, useState } from 'react';
import styles from './step.module.scss';
import { useForm } from 'react-hook-form';

type Props = {
  step: {
    title: string;
    description: string;
    typeInput: string;
    key: string;
    optionInputs: [];
    optionsCheck: [];
    validate: {
      value: boolean | number | string;
      message: string;
    };
  };
  nextStep?: () => void;
  numStep: number;
  numMax: number;
};
const InputFile = ({ step, nextStep, numStep, numMax }: Props): ReactElement => {
  const { register, handleSubmit } = useForm();
  const [isActive, setIsActive] = useState(true);

  const changeValue = () => {
    setIsActive(!isActive);
  };

  const onSubmit = data => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[step.key]) {
      getLocalStorage[step.key] = data[step.key][0]['name'];
      localStorage.setItem('keysSteps', JSON.stringify(getLocalStorage));
    } else {
      data[step.key] = data[step.key][0]['name'];
      localStorage.setItem('keysSteps', JSON.stringify({ ...data, ...getLocalStorage }));
    }
    nextStep();
  };

  return (
    <form className={styles.step__form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.file__label}>{step.key}</label>
      <input
        name={step.key}
        type="file"
        {...register(step.key, step.validate)}
        className={styles.file__input}
        onChange={changeValue}
      />
      {numStep + 1 === numMax ? (
        <Btn text="Finalizar" type="button" className="btn--bottom" disabled={isActive} />
      ) : (
        <Btn text="Siguiente" type="submit" className="btn--next" disabled={isActive} />
      )}
    </form>
  );
};
export default InputFile;
