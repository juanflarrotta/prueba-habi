import Box from '@components/box';
import React, { ReactElement } from 'react';
import styles from './checkbox.module.scss';

type Props = {
  label: string;
  value: number | string | boolean;
  validate: object;
  check?: boolean;
  change?: () => void;
};
const Checkbox = ({ label, value, validate, check, change }: Props): ReactElement => {
  return (
    <Box className="box--checkbox">
      <label className={styles.checkbox__label}>
        <input
          name={label}
          type="checkbox"
          {...validate}
          value={value}
          className={styles.checkbox__input}
          checked={check}
          onChange={change}
        />
        {label}
      </label>
    </Box>
  );
};
export default Checkbox;
