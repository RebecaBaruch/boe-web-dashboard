import React from 'react';
import DiagnosisList from '../../../../../../src/pages/diagnosis-list/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import { screen } from '@testing-library/react';

jest.mock('../../../../../../src/services/api/boe-api-v2', () => ({
  getAnalysisHistory: jest.fn(() => Promise.resolve([])),
}));

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('DiagnosisList Controller', () => {
  it('should render DiagnosisList', async () => {
    renderWithTheme(<DiagnosisList />);

    expect(screen.getByText('Id do animal')).toBeInTheDocument();
    expect(screen.getByText('Resultado')).toBeInTheDocument();
    expect(screen.getByText('Risco (em %)')).toBeInTheDocument();
    expect(screen.getByText('Autor da análise')).toBeInTheDocument();
    expect(screen.getByText('Data')).toBeInTheDocument();
    expect(screen.getByText('Ação')).toBeInTheDocument();
  });
});
