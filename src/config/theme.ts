/* eslint-disable prettier/prettier */
import { getSkinByName, ThemeConfig, O2_SKIN } from '@telefonica/mistica';

const theme: ThemeConfig = {
  skin: getSkinByName(O2_SKIN),
  colorScheme: 'light',
  i18n: {
    locale: 'pt-BR',
    phoneNumberFormattingRegionCode: 'BR',
  },
};

export { theme };
