import React from 'react';
import DiagnosisList from '../view/diagnosis-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { diagnosisMockData } from '../mock/table-data';

export default function DiagnosisListController() {
  return (
    <ThemeContextProvider theme={theme}>
      <DiagnosisList diagnosisData={diagnosisMockData} />
    </ThemeContextProvider>
  );
}
