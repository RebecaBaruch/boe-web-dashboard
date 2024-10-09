import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';
import { render, RenderResult } from '@testing-library/react';
import { theme } from '../../config/theme';

export const renderWithTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeContextProvider theme={theme}>{children}</ThemeContextProvider>,
  );
};
