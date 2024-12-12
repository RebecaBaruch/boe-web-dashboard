import React from 'react';
import FarmRegister from '../view/farm-register.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../config/theme';
import boeApiV2 from 'services/api/boe-api-v2';

export default function FarmRegisterController() {
  const farmData = {
    propertyName: 'Agostinho Carrara Farm',
    propertyPhone: '11999999999',
    taxId: '123456789',
    zipCode: '12345678',
    state: 'SP',
    city: 'São Paulo',
    address: 'Rua das Margaridas, 123',
  };

  const handleRegister = () => {
    boeApiV2.farmRegister(
      farmData.propertyName,
      farmData.propertyPhone,
      farmData.taxId,
      farmData.zipCode,
      farmData.state,
      farmData.city,
      farmData.address,
    );
  };

  return (
    <ThemeContextProvider theme={theme}>
      <FarmRegister
        propertyName={farmData.propertyName}
        propertyPhone={farmData.propertyPhone}
        taxId={farmData.taxId}
        zipCode={farmData.zipCode}
        state={farmData.state}
        city={farmData.city}
        address={farmData.address}
        onRegister={handleRegister}
      />
    </ThemeContextProvider>
  );
}
