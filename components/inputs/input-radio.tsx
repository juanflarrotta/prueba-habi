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

type Props = {
  label: string;
  name: string;
  position: number;
  validate: {
    value: boolean;
    message: string;
  };
  optionsRadio: {
    text: string;
    options: [];
  }[];
};

const InputRadio = ({ label, name, position, validate, optionsRadio }: Props): ReactElement => {
  const [textBtn, setTextBtn] = useState(TEXTS.next);
  const [option, setOption] = useState('');
  const steps = useSelector(selectValueSteps);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const onSubmit = data => {
    setLocalStorage(data);
    nextStep(position, steps, router);
  };

  useEffect(() => {
    const show = watch();
    setOption(show[name]);
  }, [watch()]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[name]) {
      setValue(name, getLocalStorage[name]);
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
        {optionsRadio.map((input, index) => {
          return (
            <>
              <label className={styles.input__label___checkbox} key={`${name}${index}`}>
                <input
                  name={name}
                  type="radio"
                  className={styles.input__input___checkbox}
                  value={input.text}
                  {...register(name, validate)}
                />
                {input.text}
              </label>
            </>
          );
        })}
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

export default InputRadio;
