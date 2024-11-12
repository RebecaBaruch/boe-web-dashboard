import { Column, TableDiagnosisData } from 'components/data-table/types';

export interface DiagnosisListProps {
  diagnosisData: TableDiagnosisData[];
  diagnosisColumnsHeader: Column[];

  currentDiagnosisPage: number | string;
  lastDiagnosisPage: number | string;
  prevDiagnosisPage: () => void;
  nextDiagnosisPage: () => void;
  selectDiagnosisMode?: boolean;
  selectedDiagnosisRows?: Set<string>;
  toggleDiagnosisSelectRow: (rowIndex: string) => void;
  toggleDiagnosisSelectAll: () => void;
  onDiagnosisSelectMode: () => void;
  onDeleteDiagnosisSelected?: (rowIndex: number) => void;
  isAllDiagnosisSelected?: boolean;
}
