import React from 'react';
import dynamic from 'next/dynamic';
import { theme } from '../../../config/theme';
import { ThemeContextProvider } from '@telefonica/mistica';
import boeApiV2 from 'services/api/boe-api-v2';
import { useLoginContext } from 'context/login-context';
import { useRouter } from 'next/router';
import { RoutesUrls } from 'utils/enums/routes-url';
import { toast, ToastContainer } from 'react-toastify';

const Login = dynamic(() => import('../view/login.view'), { ssr: false });

export default function LoginController() {
  const router = useRouter();

  const { setLoginData } = useLoginContext();
  const [isLoading, setIsLoading] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  const validateForm = (email: string, password: string) => {
    setIsButtonDisabled(!(email && password));
  };

  const handleLogin = React.useCallback(async () => {
    setIsLoading(true);
    try {
      const loginData = await boeApiV2.signIn(email, password);
      setLoginData({
        email: loginData.data.email,
        name: loginData.data.name,
        jwt: loginData.jwt,
      });
      localStorage.setItem('jwt', loginData.jwt);
      router.push(RoutesUrls.BASE_URL);
    } catch (error) {
      switch (error.statusCode) {
        case 401:
          toast.error('Credenciais inválidas. Verifique o email e senha.');
          break;
        case 405:
          toast.error(
            '⚠️ Provavelmente no servidor está fora do ar. Por favor, tente novamente mais tarde.',
          );
          break;
        default: {
          const errorMessage = (error as Error).message || 'Erro desconhecido';
          toast.error(errorMessage);
          break;
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);

  const handleGoToRegister = React.useCallback(() => {
    router.push(RoutesUrls.REGISTER);
  }, [router]);

  React.useEffect(() => {
    validateForm(email, password);
  }, [email, password]);

  return (
    <ThemeContextProvider theme={theme}>
      <ToastContainer style={{ zIndex: 99999 }} />

      <Login
        email={email}
        password={password}
        onLogin={handleLogin}
        isLoading={isLoading}
        onRegister={handleGoToRegister}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        isButtonDisabled={isButtonDisabled}
      />
    </ThemeContextProvider>
  );
}
