import React from 'react';
import { screen } from '@testing-library/react';
import DiagnosisList from '../../../../../src/pages/diagnosis-list/view/diagnosis-list.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import { diagnosisMockData } from '../../../../../src/pages/diagnosis-list/mock/table-data';
import { diagnosisListColumns } from '../../../../../src/config/constants/column-headers';

jest.mock('../../../../../src/services/api/boe-api-v2', () => ({
  getAnalysisHistory: jest.fn(() => Promise.resolve(diagnosisMockData)),
}));

describe('DiagnosisList', () => {
  it('should render DiagnosisList with expected headers', async () => {
    renderWithTheme(
      <DiagnosisList
        diagnosisData={diagnosisMockData}
        columnsHeader={diagnosisListColumns}
        currentPage="1"
        lastPage="3"
        prevPage={jest.fn()}
        nextPage={jest.fn()}
        toggleSelectRow={jest.fn()}
        toggleSelectAll={jest.fn()}
        onSelectMode={jest.fn()}
        activeTab={'anality'}
        setActiveTab={jest.fn()}
      />,
    );

    expect(screen.getByText('Id do animal')).toBeInTheDocument();
    expect(screen.getByText('Resultado')).toBeInTheDocument();
    expect(screen.getByText('Risco (em %)')).toBeInTheDocument();
    expect(screen.getByText('Autor da análise')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Ação')).toBeInTheDocument();
  });

  it('should fetch and render diagnosis data', async () => {
    renderWithTheme(
      <DiagnosisList
        diagnosisData={diagnosisMockData}
        columnsHeader={diagnosisListColumns}
        currentPage="1"
        lastPage="3"
        prevPage={jest.fn()}
        nextPage={jest.fn()}
        toggleSelectRow={jest.fn()}
        toggleSelectAll={jest.fn()}
        onSelectMode={jest.fn()}
        activeTab={'anality'}
        setActiveTab={jest.fn()}
      />,
    );

    // Espera pela renderização dos dados após a chamada da API
    await screen.findByText(diagnosisMockData[0].animalId); // Verifique se o dado mockado é renderizado

    expect(screen.getByText(diagnosisMockData[0].animalId)).toBeInTheDocument();
  });
});
