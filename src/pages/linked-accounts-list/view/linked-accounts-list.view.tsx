import DataTable from 'components/data-table/data-table.component';
import React from 'react';
import { LinkedAccountsProps } from '../types';
import { Container } from 'components/container/container.component';
import { SearchField, Title3 } from '@telefonica/mistica';
import PageStepper from 'components/page-stepper/page-stepper.component';
import { Row } from 'components/row/styled';
import { Column } from 'components/column/styled';
import ButtonPrimary from 'components/button-primary/button-primary.component';
import { ChevronDown, Plus, Trash } from 'react-feather';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { CheckSquare } from 'react-feather';

export default function LinkedAccountsList({
  accountsData,
  columnsHeader,
  currentPage,
  lastPage,
  prevPage,
  nextPage,
  selectMode,
  selectedRows,
  isAllDataSelected,
  toggleSelectRow,
  toggleSelectAll,
  onSelectMode,
}: LinkedAccountsProps) {
  return (
    <>
      <Container space={5} padding={1.5}>
        <Row align="space-between">
          <Title3>
            <b>Contas vinculadas</b>
          </Title3>
          <Row width="fit-content">
            <SearchField label={''} name={''} />

            {selectMode ? (
              <ButtonSecondary
                gray
                width="fit-content"
                height={3.7}
                content="Selecionar todos"
                onClick={toggleSelectAll}
                selected={isAllDataSelected}
              />
            ) : (
              <ButtonSecondary
                gray
                width="fit-content"
                height={3.7}
                content={
                  <>
                    Ordenar <ChevronDown width={23} height={23} />
                  </>
                }
                onClick={() => {}}
              />
            )}

            <ButtonSecondary
              gray
              width="fit-content"
              height={3.7}
              content={
                <>
                  <CheckSquare width={23} height={23} /> Selecionar
                </>
              }
              onClick={onSelectMode}
              selected={selectMode}
            />

            {selectMode ? (
              <ButtonPrimary
                width="fit-content"
                height={3.7}
                tomato
                content={
                  <>
                    <Trash width={23} height={23} /> Excluir
                  </>
                }
                onClick={() => {}}
                disabled={!!selectedRows && selectedRows.size === 0}
              />
            ) : (
              <ButtonPrimary
                width="fit-content"
                height={3.7}
                content={
                  <>
                    <Plus width={23} height={23} /> Add
                  </>
                }
                onClick={() => {}}
              />
            )}
          </Row>
        </Row>

        <Column width="100%" height="100%" justify="space-between">
          <DataTable
            data={accountsData}
            columns={columnsHeader}
            action="delete"
            selectMode={selectMode}
            selectedRows={selectedRows}
            toggleSelectRow={toggleSelectRow}
          />

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
