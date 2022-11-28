import Btn from '@components/btn';
import React, { ReactElement, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import styles from './step.module.scss';
import Box from '@components/box';
import { useForm } from 'react-hook-form';

type Props = {
  step: {
    title: string;
    key: string;
    typeInput: string;
    validate: {
      value: number | string | boolean;
      message: string;
    };
  };
  nextStep?: () => void;
  numStep: number;
  numMax: number;
};
const InputDefault = ({ step, nextStep, numStep, numMax }: Props): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [valueInput, setValueInput] = useState('');
  const [isActive, setIsActive] = useState(true);

  const changeValue = e => {
    setValueInput(e.target.value);
    if (e.target.value === '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  const onSubmit = data => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[step.key]) {
      getLocalStorage[step.key] = valueInput;
      localStorage.setItem('keysSteps', JSON.stringify(getLocalStorage));
    } else {
      localStorage.setItem('keysSteps', JSON.stringify({ ...data, ...getLocalStorage }));
    }
    nextStep();
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    setValueInput('');
    if (getLocalStorage && getLocalStorage[step.key]) {
      setValueInput(getLocalStorage[step.key]);
      setIsActive(false);
    } else {
      setValueInput('');
      setIsActive(true);
    }
  }, [step]);

  return (
    <form className={styles.step__form} onSubmit={handleSubmit(onSubmit)}>
      <label className={styles.step__label}>{step.title}</label>
      <input
        name={step.key}
        className={styles.step__input}
        type={step.typeInput}
        onInput={changeValue}
        {...register(step.key, step.validate)}
        value={valueInput}
      />
      <Box>
        <ErrorMessage errors={errors} name={step.key} render={({ message }) => <p>{message}</p>} />
      </Box>
      {numStep + 1 === numMax ? (
        <Btn text="Finalizar" type="button" className="btn--bottom" disabled={isActive} />
      ) : (
        <Btn text="Siguiente" type="submit" className="btn--next" disabled={isActive} />
      )}
    </form>
  );
};
export default InputDefault;
