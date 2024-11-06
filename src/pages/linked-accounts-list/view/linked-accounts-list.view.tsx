import DataTable from 'components/data-table/data-table.component';
import React from 'react';
import { LinkedAccountsProps } from '../types';
import { Container } from 'components/container/container.component';
import { SearchField, Title3 } from '@telefonica/mistica';
import PageStepper from 'components/page-stepper/page-stepper.component';
import { Row } from 'components/row/styled';
import { Column } from 'components/column/styled';
import ButtonPrimary from 'components/button-primary/button-primary.component';
import { ChevronDown, Plus } from 'react-feather';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { CheckSquare } from 'react-feather';

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
        <Row align="space-between">
          <Title3>
            <b>Contas vinculadas</b>
          </Title3>
          <Row width="fit-content">
            <SearchField label={''} name={''} />
            <ButtonSecondary
              gray
              height={2.7}
              width="fit-content"
              content={
                <>
                  Ordenar <ChevronDown width={23} height={23} />
                </>
              }
              onClick={() => {}}
            />
            <ButtonSecondary
              gray
              width="fit-content"
              height={2.7}
              content={
                <>
                  <CheckSquare width={23} height={23} /> Selecionar
                </>
              }
              onClick={() => {}}
            />
            <ButtonPrimary
              height={2.7}
              content={
                <>
                  <Plus width={23} height={23} /> Add
                </>
              }
              onClick={() => {}}
              width="fit-content"
            />
          </Row>
        </Row>

        <Column width="100%" height="100%" justify="space-between">
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
