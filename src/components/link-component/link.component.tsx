import React from 'react';
import styles from './styles.module.css';
import { LinkComponentProps } from './types';

export default function LinkComponent({ onChange, text }: LinkComponentProps) {
  return (
    <button onClick={onChange} className={styles.link}>
      {text}
    </button>
  );
}
