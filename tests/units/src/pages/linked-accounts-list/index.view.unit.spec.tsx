import React from 'react';
import { screen, within } from '@testing-library/react';
import LinkedAccountsList from '../../../../../src/pages/linked-accounts-list/view/linked-accounts-list.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import { dataMock } from './mock/table-data';
import { accountsColumns } from '../../../../../src/config/constants/column-headers';
describe('LinkedAccountsList', () => {
  it('should render LinkedAccountsList with text LinkedAccountsList', () => {
    const { container } = renderWithTheme(
      <LinkedAccountsList
        accountsData={dataMock}
        columnsHeader={accountsColumns}
      />,
    );

    expect(screen.getByText('Contas vinculadas')).toBeInTheDocument();

    const row = screen.getByText('Claudio Buarque').closest('tr');
    expect(row).toBeInTheDocument();
    if (row) {
      expect(
        within(row).getByText('claudio.buarque@gmail.com'),
      ).toBeInTheDocument();
      expect(within(row).getByText('02')).toBeInTheDocument();
      expect(within(row).getByText('10/01/2024')).toBeInTheDocument();
    }

    expect(container).toMatchSnapshot();
  });
});
