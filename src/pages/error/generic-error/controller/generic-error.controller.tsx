import React from 'react';
import GenericError from '../view/generic-error.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../config/theme';
import { useRouter } from 'next/router';

export default function GenericErrorController() {
  const router = useRouter();

  const handleBackButton = React.useCallback(() => {
    router.back();
  }, []);

  return (
    <ThemeContextProvider theme={theme}>
      <GenericError onBack={handleBackButton} />
    </ThemeContextProvider>
  );
}
