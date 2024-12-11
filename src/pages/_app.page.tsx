import React from 'react';
import '../global.styles.css';
import '@telefonica/mistica/css/mistica.css';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../config/theme';
import SidebarLayout from '../components/sidebar-menu/index.componente';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { RoutesUrls } from 'utils/enums/routes-url';

type MyAppProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
};

function MyApp({ Component, pageProps }: MyAppProps) {
  const isLogged = true;

  const router = useRouter();
  let currentPage = router.pathname;

  switch (currentPage) {
    case RoutesUrls.BASE_URL:
      currentPage = 'Dashboard';
      break;
    case RoutesUrls.LINKED_ACCOUNTS:
      currentPage = 'Contas associadas';
      break;
    case RoutesUrls.DIAGNOSIS_HISTORIC:
      currentPage = 'Histórico de Análises';
      break;
    case RoutesUrls.USER_PROFILE:
      currentPage = 'Meu perfil';
      break;
  }

  return (
    <>
      <Head>
        <link rel="icon" href="./assets/boe-icon-filled.svg" />
        <title>Boe | {currentPage}</title>
      </Head>
      <ThemeContextProvider theme={theme}>
        {isLogged ? (
          <SidebarLayout>
            <Component {...pageProps} />
          </SidebarLayout>
        ) : (
          <Component {...pageProps} />
        )}
      </ThemeContextProvider>
    </>
  );
}

export default MyApp;
