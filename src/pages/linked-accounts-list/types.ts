import { Column } from '../../components/data-table/types';

export type AccountData = {
  id: string;
  picture: string;
  name: string;
  email: string;
  registers: string;
  date: string;
  action: string;
};

export interface LinkedAccountsProps {
  accountsData: AccountData[];
  columnsHeader: Column[];

  currentPage: number | string;
  lastPage: number | string;
  prevPage: () => void;
  nextPage: () => void;
  selectMode?: boolean;
  selectedRows?: Set<string>;
  toggleSelectRow: (rowIndex: string) => void;
  toggleSelectAll: () => void;
  onSelectMode: () => void;
  onDeleteSelected?: (rowIndex: number) => void;
  isAllDataSelected?: boolean;
  isLoading: boolean;
}
