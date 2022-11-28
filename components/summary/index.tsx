import Btn from '@components/btn';
import Container from '@components/container';
import React, { ReactElement } from 'react';
import { FaTimes } from 'react-icons/fa';
import styles from './summary.module.scss';

type Props = {
  className?: string;
  steps: {
    key: string;
  }[];
  clickHandler?: () => void;
};

const Summary = ({ className, steps, clickHandler }: Props): ReactElement => {
  const newClass = className ? styles[className] : '';

  return (
    <div className={`${styles.summary} ${newClass}`}>
      <Container className="container--modal">
        <Btn clickHandler={clickHandler} className="btn--back" type="button">
          <FaTimes size="1.5em" />
        </Btn>
        <ul className={`${styles.summary__list}`}>
          {steps.map((step, index) => {
            return <li key={index}>{step.key}</li>;
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Summary;
