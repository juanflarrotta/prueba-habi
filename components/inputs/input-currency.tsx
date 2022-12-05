import React, { ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectValueSteps } from '@redux/slices/stepsSlice';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { TEXTS } from '@constants/index';
import Btn from '@components/btn';
import { nextStep, setLocalStorage } from 'utils/functions';
import styles from './inputs.module.scss';
import CurrencyInput from 'react-currency-input-field';

type Props = {
  label: string;
  name: string;
  position: number;
  validate: {
    required: {
      value: boolean;
      message: string;
    };
  };
};

const InputCurrency = ({ label, name, position, validate }: Props): ReactElement => {
  const [textBtn, setTextBtn] = useState(TEXTS.next);
  const [valueInput, setValueInput] = useState('0');
  const steps = useSelector(selectValueSteps);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = data => {
    setLocalStorage({ [name]: data[name].replace(/\./g, '') });
    nextStep(position, steps, router);
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[name]) {
      setValue(name, getLocalStorage[name]);
      setValueInput(getLocalStorage[name]);
      trigger(name);
    }
    if (position + 1 === steps.length) {
      setTextBtn(TEXTS.detail);
    } else {
      setTextBtn(TEXTS.next);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.input}>
        <label className={styles.input__label}>{label}</label>
        <CurrencyInput
          id="input-example"
          name={name}
          className={styles.input__input}
          value={valueInput}
          decimalsLimit={2}
          onValueChange={value => {
            setValueInput(value);
          }}
          {...register(name, validate)}
        />
        <ErrorMessage
          errors={errors}
          name={name}
          render={({ message }) => <p className={styles.input__error}>{message}</p>}
        />
        <Btn
          text={textBtn}
          type="submit"
          clickHandler={() => onSubmit}
          className="btn--next"
          disabled={!isValid}
        />
      </div>
    </form>
  );
};

export default InputCurrency;
