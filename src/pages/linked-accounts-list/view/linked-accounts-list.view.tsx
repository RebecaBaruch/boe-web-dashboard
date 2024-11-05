import DataTable from 'components/data-table/data-table.component';
import React from 'react';
import { LinkedAccountsProps } from '../types';
import { Container } from 'components/container/container.component';
import { Title3 } from '@telefonica/mistica';
import PageStepper from 'components/page-stepper/page-stepper.component';
import { Row } from 'components/row/styled';
import { Column } from 'components/column/styled';

export default function LinkedAccountsList({
  accountsData,
  columnsHeader,
  currentPage,
  lastPage,
  prevPage,
  nextPage,
}: LinkedAccountsProps) {
  return (
    <>
      <Container space={2} padding={1.5}>
        <Title3>
          <b>Contas vinculadas</b>
        </Title3>

        <Column width='100%' height='100%' justify='space-between'>
          <DataTable data={accountsData} columns={columnsHeader} action />

          <Row align="flex-end">
            <PageStepper
              currentPage={currentPage}
              lastPage={lastPage}
              prevPage={prevPage}
              nextPage={nextPage}
            />
          </Row>
        </Column>
      </Container>
    </>
  );
}
