import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useLoginContext } from 'context/login-context';
import SidebarLayout from '../components/sidebar-menu/index.componente';
import { RoutesUrls } from 'utils/enums/routes-url';

interface AppLayoutProps {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
}

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ Component, pageProps }) => {
  const { jwt } = useLoginContext();

  return jwt ? (
    <SidebarLayout>
      <Component {...pageProps} />
    </SidebarLayout>
  ) : (
    <Component {...pageProps} />
  );
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { jwt } = useLoginContext();
  const router = useRouter();

  useEffect(() => {
    const isPublicRoute = [
      '/login',
      '/register',
      '/public-page',
      '/error/generic-error',
    ].includes(router.pathname);

    if (jwt && isPublicRoute) {
      router.replace(RoutesUrls.BASE_URL);
    } else if (!jwt && !isPublicRoute) {
      router.replace(RoutesUrls.LOGIN);
    }
  }, [jwt, router]);

  const isLoading =
    (jwt && ['/login', '/register'].includes(router.pathname)) ||
    (!jwt &&
      !['/login', '/register', '/public-page'].includes(router.pathname));

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
};

export { AppLayout, ProtectedRoute };
