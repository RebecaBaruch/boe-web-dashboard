import React from 'react';
import {
  Column,
  TableAnimalsData,
  TableDiagnosisData,
} from 'components/data-table/types';
import {
  AnimalIdContainer,
  AnimalPhoto,
  AuthorContainer,
  AuthorPhoto,
  ResultBadge,
  RiskBadge,
  RiskIndicator,
  StatusBadge,
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

export const animalsListColumns: Column[] = [
  {
    header: '',
    accessor: 'riskLabel',
    render: (item: TableAnimalsData): React.ReactNode => (
      <RiskIndicator risk={item.risk} />
    ),
  },
  {
    header: 'Id do animal',
    accessor: 'animalId',
    render: (item: TableAnimalsData) => (
      <AnimalIdContainer>
        <AnimalPhoto src={item.animalPhoto} alt="Animal" />
        <span>{item.animalId}</span>
      </AnimalIdContainer>
    ),
  },
  {
    header: 'Tipo de infecção',
    accessor: 'result',
    render: (item: TableAnimalsData) => (
      <ResultBadge result={item.result}>{item.result}</ResultBadge>
    ),
  },
  {
    header: 'Risco (em %)',
    accessor: 'risk',
    render: (item: TableAnimalsData) => (
      <RiskBadge risk={item.risk}>{item.risk}%</RiskBadge>
    ),
  },
  {
    header: 'Data',
    accessor: 'date',
    render: (item: TableAnimalsData) => <span>{item.date}</span>,
  },
  {
    header: 'Status de tratamento',
    accessor: 'status',
    render: (item: TableAnimalsData) => (
      <StatusBadge status={item.status ?? 'Indefinido'}>
        {item.status ?? 'Indefinido'}
      </StatusBadge>
    ),
  },
];
