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
  valueOption: string;
  name: string;
  position: number;
  validate: {
    value: boolean;
    message: string;
  };
  optionsRadio: {
    text: string;
    inputs: [];
  }[];
  nameParent: string;
};

const InputSubRadio = ({
  valueOption,
  name,
  position,
  validate,
  optionsRadio,
  nameParent,
}: Props): ReactElement => {
  const [textBtn, setTextBtn] = useState(TEXTS.next);
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
    const newData = {
      [nameParent]: {
        value: valueOption,
        [name]: data[name],
      },
    };
    setLocalStorage(newData);
    nextStep(position, steps, router);
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[nameParent]) {
      setValue(name, getLocalStorage[nameParent][name]);
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
        {optionsRadio[0].inputs.map((input, index) => {
          return (
            <label className={styles.input__label___checkbox} key={`${name}${index}`}>
              <input
                name={name}
                type="radio"
                className={styles.input__input___checkbox}
                value={input}
                {...register(name, validate)}
              />
              {input}
            </label>
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

export default InputSubRadio;
