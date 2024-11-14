import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import LinkedAccountsList from '../../../../../src/pages/linked-accounts-list/view/linked-accounts-list.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import { dataMock } from '../../../../../src/pages/linked-accounts-list/mock/table-data';
import { accountsColumns } from '../../../../../src/config/constants/column-headers';

// Mock das props que o componente recebe
const mockProps = {
  accountsData: dataMock,
  columnsHeader: accountsColumns,
  currentPage: 1,
  lastPage: 3,
  prevPage: jest.fn(),
  nextPage: jest.fn(),
  selectMode: false,
  selectedRows: new Set<string>(),
  isAllDataSelected: false,
  toggleSelectRow: jest.fn(),
  toggleSelectAll: jest.fn(),
  onSelectMode: jest.fn(),
};

describe('LinkedAccountsList', () => {
  it('should render the component correctly', () => {
    renderWithTheme(<LinkedAccountsList {...mockProps} />);

    expect(screen.getByText(/Contas vinculadas/i)).toBeInTheDocument();

    expect(screen.getByRole('button', { name: /Add/i })).toBeInTheDocument();

    expect(
      screen.getByRole('button', { name: /Ordenar/i }),
    ).toBeInTheDocument();
  });

  it('should toggle select mode when the Select button is clicked', () => {
    const mockOnSelectMode = jest.fn();
    renderWithTheme(
      <LinkedAccountsList
        accountsData={dataMock}
        columnsHeader={accountsColumns}
        currentPage={1}
        lastPage={5}
        selectMode={true}
        isAllDataSelected={false}
        selectedRows={new Set()}
        toggleSelectRow={jest.fn()}
        toggleSelectAll={jest.fn()}
        onSelectMode={mockOnSelectMode}
        prevPage={jest.fn()}
        nextPage={jest.fn()}
      />,
    );

    fireEvent.click(screen.getByRole('button', { name: 'Selecionar' }));

    expect(mockOnSelectMode).toHaveBeenCalled();
  });

  it('should render delete button when in select mode', () => {
    const selectModeProps = { ...mockProps, selectMode: true };

    renderWithTheme(<LinkedAccountsList {...selectModeProps} />);

    expect(
      screen.getByRole('button', { name: /Excluir/i }),
    ).toBeInTheDocument();
  });
});
