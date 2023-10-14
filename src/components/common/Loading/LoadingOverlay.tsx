import React from 'react';

import styles from './loadingOverlay.module.scss';

type Props = {
  loadingMessage?: string;
};

const LoadingOverlay = ({ loadingMessage = 'loading...' }: Props) => {
  return (
    <div className={styles.containerOverlay}>
      <div className={styles.loading}>
        {loadingMessage.split('').map((letter, index) => (
          <div className={styles.loadingLetter} key={index}>
            {letter}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingOverlay;
