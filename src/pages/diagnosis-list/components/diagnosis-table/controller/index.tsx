import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';

import usePagedSelection from 'hooks/use-paged-selection';
import { TableDiagnosisData } from 'components/data-table/types';
import DiagnosisView from '../view';
import { diagnosisMockData } from 'pages/diagnosis-list/mock/table-data';
import { theme } from 'config/theme';
import { diagnosisListColumns } from 'config/constants/column-headers';

export default function DiagnosisViewController() {
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
      <DiagnosisView
        diagnosisData={currentItems}
        diagnosisColumnsHeader={diagnosisListColumns}
        currentDiagnosisPage={currentPage}
        lastDiagnosisPage={totalPages}
        prevDiagnosisPage={handlePrev}
        nextDiagnosisPage={handleNext}
        toggleDiagnosisSelectRow={toggleSelectRow}
        selectedDiagnosisRows={selectedRows}
        toggleDiagnosisSelectAll={toggleSelectAll}
        isAllDiagnosisSelected={isAllDataSelected}
        selectDiagnosisMode={isSelectMode}
        onDiagnosisSelectMode={handleSelectMode}
      />
    </ThemeContextProvider>
  );
}
