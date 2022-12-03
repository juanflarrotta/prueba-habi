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
  optionInputs: [];
};

const InputCheckbox = ({ label, name, position, validate, optionInputs }: Props): ReactElement => {
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
    const options = [];
    for (const key in data) {
      options.push(data[key]);
    }
    setLocalStorage({ [name]: options });
    nextStep(position, steps, router);
  };

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[name]) {
      getLocalStorage[name].map((value, index) => {
        setValue(`${name}${index}`, value);
        trigger(`${name}${index}`);
      });
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
        {optionInputs.map((input, index) => {
          return (
            <label className={styles.input__label___checkbox} key={`${name}${index}`}>
              <input
                type="checkbox"
                className={styles.input__input___checkbox}
                {...register(`${name}${index}`, validate)}
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

export default InputCheckbox;
