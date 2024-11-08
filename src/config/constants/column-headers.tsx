import React from 'react';
import { Column, TableDiagnosisData } from 'components/data-table/types';
import {
  AnimalIdContainer,
  AnimalPhoto,
  AuthorContainer,
  AuthorPhoto,
  ResultBadge,
  RiskBadge,
  RiskIndicator,
} from 'components/diagnosis-components/diagnosis-components.components';

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
      <RiskIndicator risk={item.risk} />
    ),
  },
  {
    header: 'Id do animal',
    accessor: 'animalId',
    render: (item: TableDiagnosisData) => (
      <AnimalIdContainer>
        <AnimalPhoto src={item.animalPhoto} alt="Animal" />
        <span>{item.animalId}</span>
      </AnimalIdContainer>
    ),
  },
  {
    header: 'Resultado',
    accessor: 'result',
    render: (item: TableDiagnosisData) => (
      <ResultBadge result={item.result}>{item.result}</ResultBadge>
    ),
  },
  {
    header: 'Risco (em %)',
    accessor: 'risk',
    render: (item: TableDiagnosisData) => (
      <RiskBadge risk={item.risk}>{item.risk}%</RiskBadge>
    ),
  },
  {
    header: 'Autor da análise',
    accessor: 'author',
    render: (item: TableDiagnosisData) => (
      <AuthorContainer>
        <AuthorPhoto src={item.authorPhoto} alt="Author" />
        <span>{item.authorName}</span>
      </AuthorContainer>
    ),
  },
  {
    header: 'Data',
    accessor: 'date',
    render: (item: TableDiagnosisData) => <span>{item.date}</span>,
  },
];
