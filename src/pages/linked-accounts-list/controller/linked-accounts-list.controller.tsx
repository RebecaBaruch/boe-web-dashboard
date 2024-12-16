import React from 'react';
import LinkedAccountsList from '../view/linked-accounts-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { accountsColumns } from 'config/constants/column-headers';
import usePagedSelection from 'hooks/use-paged-selection';
import boeApiV2 from 'services/api/boe-api-v2';
import { AccountData } from '../types';

export default function LinkedAccountsListController() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [employeeData, setEmployeeData] = React.useState<
    (AccountData & { id: string | number })[]
  >([]);
  const itemsPerPage = 6;

  React.useEffect(() => {
    boeApiV2
      .getFarmEmployees()
      .then((data) => {
        setEmployeeData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

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
  } = usePagedSelection({ data: employeeData, itemsPerPage });

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
        isLoading={isLoading}
      />
    </ThemeContextProvider>
  );
}
