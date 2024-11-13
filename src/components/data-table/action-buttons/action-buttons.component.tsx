import React from 'react';
import { Trash, Download } from 'react-feather'; // Ou o pacote de ícones que você está utilizando
import { ActionModalButton } from '../styled'; // Importar componentes de estilo conforme seu projeto
import { Text1 } from '@telefonica/mistica';
import {
  TableAccountsData,
  TableAnimalsData,
  TableDiagnosisData,
} from '../types';
import downloadPDF from '../utils/handle-selected-download';

type ActionProps = {
  action?: 'delete' | 'download';
  onDelete: (index: number) => void;
  activeRowIndex: number | null;
  data: TableAccountsData[] | TableDiagnosisData[] | TableAnimalsData[];
  onSelectedDownload?: () => void;
};

const isDiagnosisRecord = (
  record: TableAccountsData | TableDiagnosisData | TableAnimalsData,
): record is TableDiagnosisData => {
  return (
    'animalId' in record && 'authorName' in record && 'authorPhoto' in record
  );
};

const ActionButtons: React.FC<ActionProps> = ({
  action,
  onDelete,
  activeRowIndex,
  data,
}) => {
  const record = activeRowIndex !== null ? data[activeRowIndex] : null;

  const handleDownload = React.useCallback(() => {
    if (record && isDiagnosisRecord(record)) {
      downloadPDF({ record }, 'diagnosis_report.pdf');
    }
  }, [record]);

  if (action === 'delete') {
    return (
      <ActionModalButton
        onClick={() => activeRowIndex !== null && onDelete(activeRowIndex)}
      >
        <Trash width={18} height={18} />
        <Text1 regular>Excluir</Text1>
      </ActionModalButton>
    );
  }

  if (action === 'download' && record && isDiagnosisRecord(record)) {
    return (
      <ActionModalButton onClick={handleDownload}>
        <Download width={18} height={18} />
        <Text1 regular>Baixar</Text1>
      </ActionModalButton>
    );
  }

  return null;
};

export default ActionButtons;
