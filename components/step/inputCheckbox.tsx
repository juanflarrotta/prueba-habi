import Btn from '@components/btn';
import React, { ReactElement, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';
import styles from './step.module.scss';
import Box from '@components/box';
import { useForm } from 'react-hook-form';
import Checkbox from '@components/checkbox';

type Props = {
  step: {
    title: string;
    key: string;
    typeInput: string;
    optionsCheck: string[];
    validate: {
      value: number | string | boolean;
      message: string;
    };
  };
  nextStep?: () => void;
  numStep: number;
  numMax: number;
};
const InputCheckbox = ({ step, nextStep, numStep, numMax }: Props): ReactElement => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [valueInput, setValueInput] = useState(false);
  const [isActive, setIsActive] = useState(true);

  const changeValue = () => {
    setValueInput(!valueInput);
    setIsActive(!isActive);
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
    if (getLocalStorage && getLocalStorage[step.key]) {
      setValueInput(true);
      setIsActive(false);
    }
  }, [step]);

  return (
    <form className={styles.step__form} onSubmit={handleSubmit(onSubmit)}>
      <Checkbox
        label={step.key}
        value={valueInput}
        validate={{ ...register(step.key, step.validate) }}
        check={valueInput}
        change={changeValue}
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
export default InputCheckbox;
