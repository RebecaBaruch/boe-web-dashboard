import React from 'react';
import Login from '../view/login.view';
import { theme } from '../../../config/theme';
import { ThemeContextProvider } from '@telefonica/mistica';
// import BoeApiV2 from 'services/api/boe-api-v2';

export default function LoginController() {
  // const fetchUserData = async () => {
  //   try {
  //     const userData = await BoeApiV2.user.signUp({
  //       name: 'Teste',
  //       email: 'teste@example.com',
  //       password: 'senha123',
  //       phone: '1234567890',
  //     });

  //     console.log(userData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   fetchUserData();
  // }, []);

  return (
    <ThemeContextProvider theme={theme}>
      <Login />
    </ThemeContextProvider>
  );
}
