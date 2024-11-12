export interface TableAccountsData {
  id: string;
  picture: string;
  name: string;
  email: string;
  registers: string;
  date: string;
}

export interface TableDiagnosisData extends TableAnimalsData {
  authorName: string;
  authorPhoto: string;
}

export interface TableAnimalsData {
  animalId: string | number;
  animalPhoto: string;
  date: string;
  result: string;
  risk: number;
  status?: string;
}

export interface Column {
  header: string;
  accessor: string;
  render?: (
    item: TableAccountsData | TableDiagnosisData | TableAnimalsData,
  ) => React.ReactNode;
}

export interface TableProps {
  data: TableAccountsData[] | TableDiagnosisData[];
  columns: Column[];
  action?: 'download' | 'delete';
  selectMode?: boolean;
  selectedRows?: Set<string>;
  toggleSelectRow?: (rowIndex: string) => void;
}
