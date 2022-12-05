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
import InputSubRadio from './input-subradio';

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
  optionsRadio: {
    text: string;
    inputs: [];
  }[];
};

const InputRadio = ({ label, name, position, validate, optionsRadio }: Props): ReactElement => {
  const [textBtn, setTextBtn] = useState(TEXTS.next);
  const [valueOption, setValueOption] = useState('');
  const [subRadio, setSubRadio] = useState(false);
  const [subRadioFilter, setSubRadioFilter] = useState([]);
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
    const newData = {
      [name]: {
        value: data[name],
        [`sub${name}`]: '',
      },
    };
    setLocalStorage(newData);
    nextStep(position, steps, router);
  };

  useEffect(() => {
    const value = watch();
    const n = optionsRadio.filter(item => item.text === value[name]);
    setSubRadioFilter(n);
    if (n[0] && n[0].inputs.length !== 0) {
      setSubRadio(true);
    } else {
      setSubRadio(false);
    }
    setValueOption(value[name]);
  }, [watch(name)]);

  useEffect(() => {
    const getLocalStorage = JSON.parse(localStorage.getItem('keysSteps'));
    if (getLocalStorage && getLocalStorage[name]) {
      setValue(name, getLocalStorage[name].value);
      trigger(name);
    }
    if (position + 1 === steps.length) {
      setTextBtn(TEXTS.detail);
    } else {
      setTextBtn(TEXTS.next);
    }
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.input}>
          <label className={styles.input__label}>{label}</label>
          {optionsRadio.map((input, index) => {
            return (
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
            );
          })}
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className={styles.input__error}>{message}</p>}
          />
          {!subRadio && (
            <Btn
              text={textBtn}
              type="submit"
              clickHandler={() => onSubmit}
              className="btn--next"
              disabled={!isValid}
            />
          )}
        </div>
      </form>
      {subRadio && (
        <InputSubRadio
          name={`sub${name}`}
          validate={validate}
          optionsRadio={subRadioFilter}
          nameParent={name}
          position={position}
          valueOption={valueOption}
        />
      )}
    </>
  );
};

export default InputRadio;
