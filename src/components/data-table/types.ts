export interface TableAccountsData {
  id: string;
  picture: string;
  name: string;
  email: string;
  registers: string;
  date: string;
}

export interface TableDiagnosisData {
  animalId: string | number;
  animalPhoto: string;
  authorName: string;
  authorPhoto: string;
  date: string;
  result: string;
  risk: number;
}

export interface Column {
  header: string;
  accessor: string;
  render?: (item: TableAccountsData | TableDiagnosisData) => React.ReactNode;
}

export interface TableProps {
  data: TableAccountsData[] | TableDiagnosisData[];
  columns: Column[];
  action?: boolean;
  selectMode?: boolean;
  selectedRows?: Set<string>;
  toggleSelectRow?: (rowIndex: string) => void;
}
