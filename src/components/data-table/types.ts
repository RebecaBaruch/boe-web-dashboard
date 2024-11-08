export interface TableData {
  id: string;
  picture: string;
  name: string;
  email: string;
  registers: string;
  date: string;
}

export interface Column {
  header: string;
  accessor: string;
  render?: (item: TableData) => React.ReactNode;
}

export interface TableProps {
  data: TableData[];
  columns: Column[];
  action?: boolean;
  selectMode?: boolean;
  selectedRows?: Set<string>;
  toggleSelectRow?: (rowIndex: string) => void;
}
