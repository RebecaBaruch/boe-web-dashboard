import { TableDiagnosisData } from 'components/data-table/types';
import { AccountData } from 'pages/linked-accounts-list/types';
import React from 'react';

type UsePagedSelectionProps = {
  data:
    | (AccountData & { id: string | number })[]
    | (TableDiagnosisData & { animalId: string | number })[];
  itemsPerPage: number;
};

const usePagedSelection = ({ data, itemsPerPage }: UsePagedSelectionProps) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isSelectMode, setIsSelectMode] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState<Set<string>>(
    new Set(),
  );

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const isAllDataSelected = selectedRows.size === data.length;

  // Paginate items based on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  const currentItems = data
    .slice(indexOfFirstItem, indexOfLastItem)
    .map((item) => ({ ...item, id: item.id ? item.id.toString() : '' }));

  // Handlers for pagination
  const handlePrev = React.useCallback(() => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }, [currentPage]);

  const handleNext = React.useCallback(() => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }, [currentPage, totalPages]);

  // Toggle single row selection
  const toggleSelectRow = React.useCallback((rowId: string) => {
    setSelectedRows((prevSelectedRows) => {
      const newSelectedRows = new Set(prevSelectedRows);
      if (newSelectedRows.has(rowId)) newSelectedRows.delete(rowId);
      else newSelectedRows.add(rowId);
      return newSelectedRows;
    });
  }, []);

  // Toggle all rows selection
  const toggleSelectAll = React.useCallback(() => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.size === data.length) return new Set();
      return new Set(data.map((item) => item.id.toString()));
    });
  }, [data]);

  // Toggle select mode
  const handleSelectMode = React.useCallback(() => {
    setIsSelectMode((prev) => !prev);
  }, []);

  return {
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
  };
};

export default usePagedSelection;
