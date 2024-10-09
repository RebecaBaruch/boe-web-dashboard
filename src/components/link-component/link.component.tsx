import React from 'react';
import styles from './styles.module.css';
import { LinkComponentProps } from './types';

export default function LinkComponent({
    to,
    text,
}: LinkComponentProps) {
  return (
    <a href={to} className={styles.link}>
      {text}
    </a>
  );
}
