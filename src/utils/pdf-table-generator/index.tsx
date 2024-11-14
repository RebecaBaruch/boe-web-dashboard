import { Column, TableDiagnosisData } from 'components/data-table/types';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

(jsPDF as typeof jsPDF & { autoTable?: typeof autoTable }).autoTable =
  autoTable;

export const generateTablePDF = (
  columns: Column[],
  data: TableDiagnosisData[],
  filename: string = 'table-example.pdf',
) => {
  const doc = new jsPDF();

  if (data.length === 0) return;

  const tableColumns = columns
    .map((col, index) => (index === 0 ? { ...col, header: 'Risco' } : col))
    .map((col) => [col.header]);

  const tableData = data.map((row) => {
    return [
      row.riskLabel,
      row.animalId,
      row.result,
      `${row.risk}%`,
      row.authorName,
      row.date,
    ];
  });

  autoTable(doc, {
    head: [tableColumns],
    body: tableData,
  });

  doc.save(filename);
};
