import React from 'react';
import Login from '../view/login.view';
import { theme } from '../../../config/theme';
import { ThemeContextProvider } from '@telefonica/mistica';

export default function LoginController() {
  return (
    <ThemeContextProvider theme={theme}>
      <Login />
    </ThemeContextProvider>
  );
}
