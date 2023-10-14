import React from 'react';

import styles from './style.module.scss';

interface PuffLoaderProps {
  size?: number;
  borderWidth?: number;
  color?: string;
}

const PuffLoader = (props: PuffLoaderProps) => {
  const { size = 16, color = '#161616', borderWidth = 1 } = props;

  return (
    <span className={styles.puffLoader} style={{ width: size, height: size }}>
      <span
        className={styles.puffLoaderLayer1}
        style={{
          borderColor: color,
          borderWidth: borderWidth,
        }}
      >
        <span
          className={styles.puffLoaderLayer2}
          style={{
            borderColor: color,
            borderWidth: borderWidth,
          }}
        ></span>
      </span>
    </span>
  );
};

export default PuffLoader;
