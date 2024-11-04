export interface TableData {
  id: string;
  foto: string;
  nome: string;
  email: string;
  registros: string;
  data: string;
}

export interface Column {
  header: string;
  accessor?: keyof TableData;
  render?: (item: TableData, index: number) => React.ReactNode;
}

export interface TableProps {
  data: TableData[];
  columns: Column[];
}
