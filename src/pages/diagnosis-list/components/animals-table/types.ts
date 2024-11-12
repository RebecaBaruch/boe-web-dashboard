import { Column, TableDiagnosisData } from 'components/data-table/types';

export interface AnimalsListProps {
  animalsData: TableDiagnosisData[];
  animalsColumnsHeader: Column[];

  currentAnimalsPage: number | string;
  lastAnimalsPage: number | string;
  prevAnimalsPage: () => void;
  nextAnimalsPage: () => void;
}
