import React from 'react';
import { screen } from '@testing-library/react';
import DiagnosisList from '../../../../../src/pages/diagnosis-list/view/diagnosis-list.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import { diagnosisMockData } from '../../../../../src/pages/diagnosis-list/mock/table-data';
import { diagnosisListColumns } from '../../../../../src/config/constants/column-headers';

describe('DiagnosisList', () => {
  it('should render DiagnosisList with expected headers', () => {
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
});
