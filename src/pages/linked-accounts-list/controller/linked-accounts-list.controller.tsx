import React from 'react';
import LinkedAccountsList from '../view/linked-accounts-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { dataMock } from '../mock/table-data';
import { accountsColumns } from 'config/constants/column-headers';

export default function LinkedAccountsListController() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isSelectMode, setIsSelectMode] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState<Set<number>>(
    new Set(),
  );
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

  const toggleSelectRow = (rowIndex: number) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(rowIndex)) {
        newSelectedRows.delete(rowIndex);
        console.log(newSelectedRows);
      } else {
        newSelectedRows.add(rowIndex);
        console.log(newSelectedRows);
      }
      return newSelectedRows;
    });
  };

  // Função para excluir as linhas selecionadas
  // const handleDeleteSelected = () => {
  //   console.log('Excluir as linhas:', Array.from(selectedRows));
  //   // Aqui você pode fazer a exclusão efetiva
  //   setSelectedRows(new Set()); // Limpa a seleção após a exclusão
  // };

  const handleSelectMode = React.useCallback(() => {
    setIsSelectMode((prev) => !prev);
  }, []);
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
        selectMode={isSelectMode}
        onSelectMode={handleSelectMode}
      />
    </ThemeContextProvider>
  );
}
