import React from 'react';
import { ThemeContextProvider } from '@telefonica/mistica';

import usePagedSelection from '../../../../../hooks/use-paged-selection';
import { TableAnimalsData } from '../../../../../components/data-table/types';
import AnimalsView from '../view';
import { theme } from '../../../../../config/theme';
import { animalsListColumns } from '../../../../../config/constants/column-headers';
import boeApiV2 from 'services/api/boe-api-v2';

export default function AnimalsViewController() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [tableData, setTableData] = React.useState<TableAnimalsData[]>([]);
  const itemsPerPage = 6;

  React.useEffect(() => {
    boeApiV2
      .getAnimalsList()
      .then((data) => {
        setTableData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
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
        isLoading={isLoading}
      />
    </ThemeContextProvider>
  );
}
