import { Column, TableDiagnosisData } from 'components/data-table/types';

export interface DiagnosisListProps {
  diagnosisData: TableDiagnosisData[];
  columnsHeader: Column[];

  //   currentPage: number | string;
  //   lastPage: number | string;
  //   prevPage: () => void;
  //   nextPage: () => void;
  //   selectMode?: boolean;
  //   selectedRows?: Set<string>;
  //   toggleSelectRow: (rowIndex: string) => void;
  //   toggleSelectAll: () => void;
  //   onSelectMode: () => void;
  //   onDeleteSelected?: (rowIndex: number) => void;
  //   isAllDataSelected?: boolean;
}
