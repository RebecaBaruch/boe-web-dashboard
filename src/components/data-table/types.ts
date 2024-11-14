export interface TableAccountsData {
  id: string;
  picture: string;
  name: string;
  email: string;
  registers: string;
  date: string;
}

export interface TableDiagnosisData extends TableAnimalsData {
  riskLabel: string;
  id: string;
  authorName: string;
  authorPhoto: string;
  diagnosisDate: string;
}

export interface TableAnimalsData {
  id: string;
  animalId: string | number;
  animalName?: string;
  animalPhoto: string;
  date: string;
  result: string;
  risk: number;
  status?: string;
  analysisImg?: string;
}

export interface Column {
  header: string;
  accessor: string;
  render?: (
    item: TableAccountsData | TableDiagnosisData | TableAnimalsData,
  ) => React.ReactNode;
}

export interface TableProps {
  data: TableAccountsData[] | TableDiagnosisData[] | TableAnimalsData[];
  columns: Column[];
  action?: 'download' | 'delete';
  selectMode?: boolean;
  selectedRows?: Set<string>;
  toggleSelectRow?: (rowIndex: string) => void;
}
