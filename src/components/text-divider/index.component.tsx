import React from 'react';
import styles from './styles.module.css';

type TextDividerProps = { text: string };

export default function TextDivider({ text }: TextDividerProps) {
  return (
    <div className={styles.inline}>
      <div className={styles.divider} />
      <span className={styles.text}>{text}</span>
      <div className={styles.divider} />
    </div>
  );
}
