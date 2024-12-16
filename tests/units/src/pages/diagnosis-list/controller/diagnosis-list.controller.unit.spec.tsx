import React from 'react';
import DiagnosisList from '../../../../../../src/pages/diagnosis-list/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import { screen, waitFor } from '@testing-library/react';

jest.mock('../../../../../../src/services/api/boe-api-v2', () => ({
  getAnalysisHistory: jest.fn(() =>
    Promise.resolve([
      { id: '1', name: 'Animal 1', age: 3 },
      { id: '2', name: 'Animal 2', age: 5 },
    ]),
  ),
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

    await waitFor(() => {
      expect(screen.getByText('Id do animal')).toBeInTheDocument();
      expect(screen.getByText('Resultado')).toBeInTheDocument();
      expect(screen.getByText('Risco (em %)')).toBeInTheDocument();
      expect(screen.getByText('Autor da análise')).toBeInTheDocument();
      expect(screen.getByText('Data')).toBeInTheDocument();
      expect(screen.getByText('Ação')).toBeInTheDocument();
    });
  });
});
