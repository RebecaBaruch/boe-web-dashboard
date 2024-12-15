import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';

import usePagedSelection from '../../../../../hooks/use-paged-selection';
import { TableDiagnosisData } from '../../../../../components/data-table/types';
import DiagnosisView from '../view';
import { theme } from '../../../../../config/theme';
import { diagnosisListColumns } from '../../../../../config/constants/column-headers';
import { generateTablePDF } from '../../../../../utils/pdf-table-generator';
import boeApiV2 from 'services/api/boe-api-v2';

export default function DiagnosisViewController() {
  const [tableData, setTableData] = React.useState<TableDiagnosisData[]>([]);
  const itemsPerPage = 6;

  React.useEffect(() => {
    boeApiV2.getAnalysisHistory().then((data) => {
      setTableData(data);
    });
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
