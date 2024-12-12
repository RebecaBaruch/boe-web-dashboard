import React from 'react';
import UserRegister from '../view/user-register.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../config/theme';
import boeApiV2 from 'services/api/boe-api-v2';

export default function UserRegisterController() {
  const userAccount = {
    name: 'Agostinho Carrara',
    email: 'agostinho@gmail.com',
    phone: '11999999999',
    password: 'abobrinha',
  };

  const handleContinue = () => {
    boeApiV2.userSignUp(
      userAccount.name,
      userAccount.email,
      userAccount.phone,
      userAccount.password,
    );
  };

  return (
    <ThemeContextProvider theme={theme}>
      <UserRegister
        userName={userAccount.name}
        email={userAccount.email}
        phone={userAccount.phone}
        password={userAccount.password}
        error={false}
        disabled={false}
        onContinueButton={handleContinue}
        onCancelButton={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    </ThemeContextProvider>
  );
}
