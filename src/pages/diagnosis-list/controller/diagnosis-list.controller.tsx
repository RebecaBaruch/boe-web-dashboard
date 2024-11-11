import React, { act } from 'react';
import DiagnosisList from '../view/diagnosis-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { diagnosisMockData } from '../mock/table-data';
import { diagnosisListColumns } from '../../../config/constants/column-headers';
import usePagedSelection from 'hooks/use-paged-selection';
import { TableDiagnosisData } from 'components/data-table/types';

export default function DiagnosisListController() {
  const [activeTab, setActiveTab] = React.useState<'anality' | 'animals'>(
    'anality',
  );
  const [tableData, setTableData] = React.useState<TableDiagnosisData[]>([]);
  const itemsPerPage = 6;

  React.useEffect(() => {
    const mockedData = diagnosisMockData;
    setTableData(mockedData);
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
  } = usePagedSelection({ data: tableData, itemsPerPage });

  return (
    <ThemeContextProvider theme={theme}>
      <DiagnosisList
        diagnosisData={currentItems}
        columnsHeader={diagnosisListColumns}
        currentPage={currentPage}
        lastPage={totalPages}
        prevPage={handlePrev}
        nextPage={handleNext}
        toggleSelectRow={toggleSelectRow}
        selectedRows={selectedRows}
        toggleSelectAll={toggleSelectAll}
        isAllDataSelected={isAllDataSelected}
        selectMode={isSelectMode}
        onSelectMode={handleSelectMode}
        activeTab={activeTab}
        setActiveTab={() =>
          setActiveTab(activeTab === 'anality' ? 'animals' : 'anality')
        }
      />
    </ThemeContextProvider>
  );
}
