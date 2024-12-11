import React from 'react';
import LinkedAccountsList from '../../../../../../src/pages/linked-accounts-list/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import usePagedSelection from '../../../../../../src/hooks/use-paged-selection';
import { dataMock } from '../../../../../../src/pages/linked-accounts-list/mock/table-data';
import { fireEvent, screen } from '@testing-library/react';

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

describe('LinkedAccountsListController', () => {
  const mockHandleSelectMode = jest.fn();
  const mockToggleSelectAll = jest.fn();
  const mockToggleSelectRow = jest.fn();
  const mockHandlePrev = jest.fn();
  const mockHandleNext = jest.fn();

  beforeEach(() => {
    // Mock implementation for usePagedSelection
    (usePagedSelection as jest.Mock).mockImplementation(() => ({
      currentPage: 1,
      totalPages: 3,
      currentItems: dataMock.slice(0, 7),
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

  it('should render the LinkedAccountsList with correct props', () => {
    renderWithTheme(<LinkedAccountsList />);

    // Check if the table is rendered with the expected number of items
    expect(screen.getByText(dataMock[0].name)).toBeInTheDocument();
    expect(screen.getByText(dataMock[6].name)).toBeInTheDocument();
  });

  it('should call handlePrev when prev button is clicked', () => {
    renderWithTheme(<LinkedAccountsList />);

    fireEvent.click(screen.getByRole('button', { name: 'Prev' }));

    expect(mockHandlePrev).toHaveBeenCalled();
  });

  it('should call handleNext when next button is clicked', () => {
    renderWithTheme(<LinkedAccountsList />);

    fireEvent.click(screen.getByRole('button', { name: 'Prox' }));

    expect(mockHandleNext).toHaveBeenCalled();
  });

  it('should toggle select mode when "Selecionar" button is clicked', () => {
    renderWithTheme(<LinkedAccountsList />);

    fireEvent.click(screen.getByRole('button', { name: 'Selecionar' }));

    expect(mockHandleSelectMode).toHaveBeenCalled();
  });
});
