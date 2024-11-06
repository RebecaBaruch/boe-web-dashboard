import React from 'react';
import LinkedAccountsList from '../view/linked-accounts-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { dataMock } from '../mock/table-data';
import { accountsColumns } from 'config/constants/column-headers';

export default function LinkedAccountsListController() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const itemsPerPage = 7;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataMock.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(dataMock.length / itemsPerPage);

  const handlePrev = React.useCallback(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, [currentPage]);

  const handleNext = React.useCallback(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, [currentPage, totalPages]);

  return (
    <ThemeContextProvider theme={theme}>
      <LinkedAccountsList
        accountsData={currentItems}
        columnsHeader={accountsColumns}
        currentPage={currentPage}
        lastPage={totalPages}
        prevPage={handlePrev}
        nextPage={handleNext}
      />
    </ThemeContextProvider>
  );
}
