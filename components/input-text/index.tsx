import Btn from '@components/btn';
import { TEXTS } from '@constants/index';
import { ErrorMessage } from '@hookform/error-message';
import { selectValueSteps } from '@redux/slices/stepsSlice';
import { useRouter } from 'next/router';
import React, { ReactElement, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styles from './input-text.module.scss';

type Props = {
  label: string;
  name: string;
  position: number;
  validate: {
    value: boolean;
    message: string;
  };
};

const InputText = ({ label, name, position, validate }: Props): ReactElement => {
  const [textBtn, setTextBtn] = useState(TEXTS.next);
  const steps = useSelector(selectValueSteps);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const nextStep = () => {
    if (position + 1 !== steps.length) {
      router.push(`/vender/${steps[position + 1].path}`);
    } else {
      console.log('ultimo paso');
    }
  };

  const onSubmit = data => {
    localStorage.setItem('keysSteps', JSON.stringify({ ...data }));
    nextStep();
  };

  useEffect(() => {
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
        <input type="text" className={styles.input__input} {...register(name, validate)} />
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

export default InputText;
