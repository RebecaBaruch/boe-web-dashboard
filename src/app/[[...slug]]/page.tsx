import React from 'react';
import '../../index.css';
import { ClientOnly } from './client';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../config/theme';

export function generateStaticParams() {
  return [{ slug: [''] }];
}

export default function Page() {
  return (
    <ThemeContextProvider theme={theme}>
      <ClientOnly />
    </ThemeContextProvider>
  );
}
