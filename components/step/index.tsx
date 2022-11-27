import Btn from '@components/btn';
import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import styles from './step.module.scss';
import Box from '@components/box';

type Props = {
  step: {
    title: string;
    description: string;
    typeInput: string;
    key: string;
    validate: {
      value: any;
      message: string;
    };
  };
  numStep: number;
  numMax: number;
  nextStep?: () => void;
};
const Step = ({ step, numStep, numMax, nextStep }: Props): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isActive, setIsActive] = useState(true);
  const [valueInput, setValueInput] = useState('');

  const onSubmit = (data: any) => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[step.key]) {
      getLocalStorage[step.key] = valueInput;
      localStorage.setItem('keysSteps', JSON.stringify(getLocalStorage));
    } else {
      localStorage.setItem('keysSteps', JSON.stringify(data));
    }
    nextStep();
  };

  const changeValue = (e: any) => {
    setValueInput(e.target.value);
    if (e.target.value === '') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
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
    console.log(valueInput);
  }, [step]);

  return (
    <div className={styles.step}>
      <h3 className={styles.step__title}>{`Paso ${numStep + 1} de ${numMax}`}</h3>
      <p className={styles.step__description}>{step.description}</p>
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
          <ErrorMessage
            errors={errors}
            name={step.key}
            render={({ message }) => <p>{message}</p>}
          />
        </Box>
        {numStep + 1 === numMax ? (
          <Btn text="Finalizar" type="button" className="btn--bottom" disabled={isActive} />
        ) : (
          <Btn text="Siguiente" type="submit" className="btn--next" disabled={isActive} />
        )}
      </form>
    </div>
  );
};
export default Step;
