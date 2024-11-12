import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';

import usePagedSelection from 'hooks/use-paged-selection';
import { TableAnimalsData } from 'components/data-table/types';
import AnimalsView from '../view';
import { animalsMockData } from 'pages/diagnosis-list/mock/table-data';
import { theme } from 'config/theme';
import { animalsListColumns } from 'config/constants/column-headers';

export default function AnimalsViewController() {
  const [tableData, setTableData] = React.useState<TableAnimalsData[]>([]);
  const itemsPerPage = 6;

  React.useEffect(() => {
    const mockedData = animalsMockData;
    setTableData(mockedData);
  }, []);

  const { currentPage, totalPages, currentItems, handlePrev, handleNext } =
    usePagedSelection({ data: tableData, itemsPerPage });

  return (
    <ThemeContextProvider theme={theme}>
      <AnimalsView
        animalsData={currentItems}
        animalsColumnsHeader={animalsListColumns}
        currentAnimalsPage={currentPage}
        lastAnimalsPage={totalPages}
        prevAnimalsPage={handlePrev}
        nextAnimalsPage={handleNext}
      />
    </ThemeContextProvider>
  );
}
