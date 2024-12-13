import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useLoginContext } from 'context/login-context';
import SidebarLayout from '../components/sidebar-menu/index.componente';
import LoadingComponent from '../components/loading/loading.component';
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!jwt) {
      router.push(RoutesUrls.LOGIN);
    }
    setIsLoading(!jwt);
  }, [jwt, router]);

  return isLoading ? <LoadingComponent /> : <>{children}</>;
};

export { AppLayout, ProtectedRoute };
