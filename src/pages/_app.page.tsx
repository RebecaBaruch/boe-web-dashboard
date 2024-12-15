import React from 'react';
import '../global.styles.css';
import '@telefonica/mistica/css/mistica.css';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../config/theme';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { LoginContextProvider } from 'context/login-context';
import { getPageTitle } from '../utils/get-page-title';
import { AppLayout, ProtectedRoute } from './protected-route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type MyAppProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(true);
  const pageTitle = isLoading ? 'Carregando...' : getPageTitle(router.pathname);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="./assets/boe-icon-filled.svg" />
        <title>Boe | {pageTitle}</title>
      </Head>
      <ThemeContextProvider theme={theme}>
        <LoginContextProvider>
          <ToastContainer />
          <ProtectedRoute>
            <AppLayout Component={Component} pageProps={pageProps} />
          </ProtectedRoute>
        </LoginContextProvider>
      </ThemeContextProvider>
    </>
  );
};

export default MyApp;
