import React from 'react';
import { BlobProvider } from '@react-pdf/renderer';
import { Trash, Download } from 'react-feather'; // Ou o pacote de ícones que você está utilizando
import { ActionModalButton } from '../styled'; // Importar componentes de estilo conforme seu projeto
import { PDFDocumentGenerator } from '../../../utils/pdf-document-generator';
import { Text1 } from '@telefonica/mistica';
import {
  TableAccountsData,
  TableAnimalsData,
  TableDiagnosisData,
} from '../types';

type ActionProps = {
  action?: 'delete' | 'download';
  onDelete: (index: number) => void;
  activeRowIndex: number | null;
  data: TableAccountsData[] | TableDiagnosisData[] | TableAnimalsData[];
};

const ActionButtons: React.FC<ActionProps> = ({
  action,
  onDelete,
  activeRowIndex,
  data,
}) => {
  const record = activeRowIndex !== null ? data[activeRowIndex] : null;

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

  if (
    action === 'download' &&
    record &&
    'animalId' in record &&
    'authorName' in record &&
    'authorPhoto' in record
  ) {
    return (
      <BlobProvider
        document={
          <PDFDocumentGenerator record={record as TableDiagnosisData} />
        }
      >
        {({ url, loading }) =>
          loading ? (
            <Text1 regular>Gerando PDF...</Text1>
          ) : (
            <ActionModalButton
              onClick={() => url && window.open(url, '_blank')}
            >
              <Download width={18} height={18} />
              <Text1 regular>Baixar</Text1>
            </ActionModalButton>
          )
        }
      </BlobProvider>
    );
  }

  return null;
};

export default ActionButtons;
