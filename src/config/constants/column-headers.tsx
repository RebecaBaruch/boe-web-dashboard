import React from 'react';
import { Column, TableDiagnosisData } from 'components/data-table/types';
import { getResultColor, getRiskColor } from 'utils/color-utils';

export const accountsColumns: Column[] = [
  { header: 'Id', accessor: 'id' },
  { header: 'Foto', accessor: 'picture' },
  { header: 'Nome', accessor: 'name' },
  { header: 'E-mail', accessor: 'email' },
  { header: 'N° de registros', accessor: 'registers' },
  { header: 'Data de ingresso', accessor: 'date' },
];

export const diagnosisListColumns: Column[] = [
  {
    header: '',
    accessor: 'riskLabel',
    render: (item: TableDiagnosisData): React.ReactNode => (
      <span
        style={{
          backgroundColor: getRiskColor(item.risk),
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          display: 'inline-block',
        }}
      />
    ),
  },
  {
    header: 'Id do animal',
    accessor: 'animalId',
    render: (item: TableDiagnosisData) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={item.animalPhoto}
          alt="Animal"
          style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }}
        />
        <span>{item.animalId}</span>
      </div>
    ),
  },
  {
    header: 'Resultado',
    accessor: 'result',
    render: (item: TableDiagnosisData) => (
      <span
        style={{
          backgroundColor: getResultColor(item.result),
          color: 'white',
          padding: '4px 8px',
          borderRadius: 8,
        }}
      >
        {item.result}
      </span>
    ),
  },
  {
    header: 'Risco (em %)',
    accessor: 'risk',
    render: (item: TableDiagnosisData) => (
      <span
        style={{
          backgroundColor: getRiskColor(item.risk),
          color: 'white',
          padding: '4px 8px',
          borderRadius: 8,
        }}
      >
        {item.risk}%
      </span>
    ),
  },
  {
    header: 'Autor da análise',
    accessor: 'author',
    render: (item: TableDiagnosisData) => (
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={item.authorPhoto}
          alt="Author"
          style={{ width: 30, height: 30, borderRadius: '50%', marginRight: 8 }}
        />
        <span>{item.authorName}</span>
      </div>
    ),
  },
  {
    header: 'Data',
    accessor: 'date',
    render: (item: TableDiagnosisData) => <span>{item.date}</span>,
  },
];
