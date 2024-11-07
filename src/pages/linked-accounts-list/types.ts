import { Column } from 'components/data-table/types';

export interface LinkedAccountsProps {
  accountsData: Array<{
    id: string;
    picture: string;
    name: string;
    email: string;
    registers: string;
    date: string;
  }>;
  columnsHeader: Column[];

  currentPage: number | string;
  lastPage: number | string;
  prevPage: () => void;
  nextPage: () => void;
  selectMode?: boolean;
  selectedRows?: Set<number>;
  toggleSelectRow?: (rowIndex: number) => void;
  onSelectMode: () => void;
  onDeleteSelected?: (rowIndex: number) => void;
}
