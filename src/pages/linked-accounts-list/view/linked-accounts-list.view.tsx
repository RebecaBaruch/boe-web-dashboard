import DataTable from 'components/data-table/data-table.component';
import React from 'react';
import { LinkedAccountsProps } from '../types';
import { Container } from 'components/container/container.component';
import { Title3 } from '@telefonica/mistica';

export default function LinkedAccountsList({
  accountsData,
  columnsHeader,
}: LinkedAccountsProps) {
  return (
    <>
      <Container space={2} padding={1.5}>
        <Title3>
          <b>Contas vinculadas</b>
        </Title3>
        <DataTable data={accountsData} columns={columnsHeader} />
      </Container>
    </>
  );
}
