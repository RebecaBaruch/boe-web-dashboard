import React from 'react';
import '../global.styles.css';
import '@telefonica/mistica/css/mistica.css';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../config/theme';
import SidebarLayout from 'components/sidebar-menu/index.componente';

type MyAppProps = {
  Component: React.ElementType; // Tipo para o componente
  pageProps: Record<string, unknown>; // Tipo genérico para as propriedades da página
};

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeContextProvider theme={theme}>
      <SidebarLayout>
        <Component {...pageProps} />
      </SidebarLayout>
    </ThemeContextProvider>
  );
}

export default MyApp;
