import React from 'react';
import LinkedAccountsList from '../../../../../../src/pages/linked-accounts-list/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import usePagedSelection from '../../../../../../src/hooks/use-paged-selection';
import { fireEvent, screen } from '@testing-library/react';
import boeApiV2 from '../../../../../../src/services/api/boe-api-v2';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

jest.mock('../../../../../../src/hooks/use-paged-selection', () => ({
  __esModule: true,
  default: jest.fn(),
}));

jest.mock('../../../../../../src/services/api/boe-api-v2', () => ({
  getFarmEmployees: jest.fn(),
}));

describe('LinkedAccountsListController', () => {
  const mockHandleSelectMode = jest.fn();
  const mockToggleSelectAll = jest.fn();
  const mockToggleSelectRow = jest.fn();
  const mockHandlePrev = jest.fn();
  const mockHandleNext = jest.fn();

  const mockEmployeeData = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    (boeApiV2.getFarmEmployees as jest.Mock).mockResolvedValue([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Smith' },
    ]);

    (usePagedSelection as jest.Mock).mockImplementation(() => ({
      currentPage: 2,
      totalPages: 3,
      currentItems: mockEmployeeData.slice(0, 2),
      isAllDataSelected: false,
      isSelectMode: false,
      selectedRows: [],
      handlePrev: mockHandlePrev,
      handleNext: mockHandleNext,
      toggleSelectRow: mockToggleSelectRow,
      toggleSelectAll: mockToggleSelectAll,
      handleSelectMode: mockHandleSelectMode,
    }));
  });

  it('should fetch and set employee data on mount', async () => {
    (boeApiV2.getFarmEmployees as jest.Mock).mockResolvedValueOnce(
      mockEmployeeData,
    );

    renderWithTheme(<LinkedAccountsList />);

    await screen.findByText(mockEmployeeData[0].name);

    expect(screen.getByText(mockEmployeeData[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockEmployeeData[1].name)).toBeInTheDocument();
  });

  it('should navigate between pages', async () => {
    renderWithTheme(<LinkedAccountsList />);

    await screen.findByRole('button', { name: /Prox/i });
    fireEvent.click(screen.getByRole('button', { name: /Prox/i }));

    fireEvent.click(screen.getByRole('button', { name: 'Prev' }));
    expect(mockHandlePrev).toHaveBeenCalled();
  });

  it('should toggle select mode', () => {
    renderWithTheme(<LinkedAccountsList />);

    fireEvent.click(screen.getByRole('button', { name: 'Selecionar' }));

    expect(mockHandleSelectMode).toHaveBeenCalled();
  });
});
