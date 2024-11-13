import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';

import usePagedSelection from 'hooks/use-paged-selection';
import { TableDiagnosisData } from 'components/data-table/types';
import DiagnosisView from '../view';
import { diagnosisMockData } from 'pages/diagnosis-list/mock/table-data';
import { theme } from 'config/theme';
import { diagnosisListColumns } from 'config/constants/column-headers';
import { generateTablePDF } from 'utils/pdf-table-generator';

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
    isSelectMode,
    selectedRows,
    handlePrev,
    handleNext,
    toggleSelectRow,
  } = usePagedSelection({ data: tableData, itemsPerPage });

  const handleDownload = React.useCallback(() => {
    generateTablePDF(diagnosisListColumns, tableData);
  }, [tableData]);

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
        selectDiagnosisMode={isSelectMode}
        onDownload={handleDownload}
      />
    </ThemeContextProvider>
  );
}
