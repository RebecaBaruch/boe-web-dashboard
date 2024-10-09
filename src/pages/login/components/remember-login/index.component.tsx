import React from 'react';
import styles from './styles.module.css';
import { Checkbox } from '@telefonica/mistica';

export default function RememberLogin() {
  return (
    <div className={styles.checkboxContainer}>
      <Checkbox name="remember-login" />
      <h3>Lembre-se de mim</h3>
    </div>
  );
}
