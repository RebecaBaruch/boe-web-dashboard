import React from 'react';
import { useLoginContext } from '../context/login-context';
import SidebarLayout from '../components/sidebar-menu/index.componente';
import { useRouter } from 'next/router';
import { RoutesUrls } from '../utils/enums/routes-url';
import LoadingComponent from '../components/loading/loading.component';

type AppLayoutProps = {
  Component: React.ElementType;
  pageProps: Record<string, unknown>;
};

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  Component,
  pageProps,
}) => {
  const { jwt } = useLoginContext();
  const isLogged = !!jwt;

  if (!isLogged) {
    return <Component {...pageProps} />;
  }

  return (
    <SidebarLayout>
      <Component {...pageProps} />
    </SidebarLayout>
  );
};

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const { jwt } = useLoginContext();
  const isLogged = !!jwt;

  const isPublicRoute = [RoutesUrls.LOGIN, RoutesUrls.REGISTER].includes(
    router.pathname as RoutesUrls,
  );

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) return;

    if (isLogged && isPublicRoute) {
      router.replace(RoutesUrls.BASE_URL);
    } else if (!isLogged && !isPublicRoute) {
      router.push(RoutesUrls.LOGIN);
    }
  }, [isLogged, router, isPublicRoute, isLoading]);

  React.useEffect(() => {
    if (isLogged !== null) {
      setIsLoading(false);
    }
  }, [isLogged]);

  if (isLoading) {
    return <LoadingComponent />;
  }

  return <>{children}</>;
};
