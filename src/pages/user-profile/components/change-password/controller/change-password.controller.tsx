import React from 'react';
import ChangePassword from '../view/change-password.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../../config/theme';

export default function ChangePasswordController() {
  return (
    <ThemeContextProvider theme={theme}>
      <ChangePassword />
    </ThemeContextProvider>
  );
}
