import React, { ReactElement } from 'react';
import styles from './background.module.scss';

const Background = (): ReactElement => (
  <figure className={styles.background}>
    <picture>
      <source srcSet="/images/background-mobile.png" type="image/png" media="(max-width:600px)" />
      <source srcSet="/images/background-tablet.png" type="image/png" media="(max-width:1024px)" />
      <img
        src="/images/background-desktop.png"
        alt="Background"
        className={styles.background_img}
      />
    </picture>
  </figure>
);

export default Background;
