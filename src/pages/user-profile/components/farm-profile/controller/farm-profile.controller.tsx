import React from 'react';
import FarmProfile from '../view/farm-profile.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../../config/theme';

export default function FarmProfileController() {
  return (
    <ThemeContextProvider theme={theme}>
      <FarmProfile />
    </ThemeContextProvider>
  );
}
