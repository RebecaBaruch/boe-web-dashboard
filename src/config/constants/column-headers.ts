import { Column } from 'components/data-table/types';

export const accountsColumns: Column[] = [
  { header: 'Id', accessor: 'id' },
  { header: 'Foto', accessor: 'picture' },
  { header: 'Nome', accessor: 'name' },
  { header: 'E-mail', accessor: 'email' },
  { header: 'N° de registros', accessor: 'registers' },
  { header: 'Data de ingresso', accessor: 'date' },
  { header: 'Ação', accessor: 'action' },
];
