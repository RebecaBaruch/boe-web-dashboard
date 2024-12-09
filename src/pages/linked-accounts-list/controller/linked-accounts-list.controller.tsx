import React from 'react';
import LinkedAccountsList from '../view/linked-accounts-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { dataMock } from '../mock/table-data';
import { accountsColumns } from 'config/constants/column-headers';
import usePagedSelection from 'hooks/use-paged-selection';

export default function LinkedAccountsListController() {
  const mockedData = dataMock;
  const itemsPerPage = 6;

  const {
    currentPage,
    totalPages,
    currentItems,
    isAllDataSelected,
    isSelectMode,
    selectedRows,
    handlePrev,
    handleNext,
    toggleSelectRow,
    toggleSelectAll,
    handleSelectMode,
  } = usePagedSelection({ data: mockedData, itemsPerPage });

  return (
    <ThemeContextProvider theme={theme}>
      <LinkedAccountsList
        accountsData={currentItems}
        columnsHeader={accountsColumns}
        currentPage={currentPage}
        lastPage={totalPages}
        prevPage={handlePrev}
        nextPage={handleNext}
        selectedRows={selectedRows}
        toggleSelectRow={toggleSelectRow}
        toggleSelectAll={toggleSelectAll}
        isAllDataSelected={isAllDataSelected}
        selectMode={isSelectMode}
        onSelectMode={handleSelectMode}
      />
    </ThemeContextProvider>
  );
}
