import React from 'react';
import { Container } from 'components/container/container.component';
import DataTable from 'components/data-table/data-table.component';
import { DiagnosisListProps } from '../types';
import { Row } from 'components/row/styled';
import { SearchField, Title3 } from '@telefonica/mistica';
import { Column } from 'components/column/styled';
import PageStepper from 'components/page-stepper/page-stepper.component';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { CheckSquare, ChevronDown, Download, Filter } from 'react-feather';
import ButtonPrimary from 'components/button-primary/button-primary.component';
import TabButtons from '../components/tab-button/tab-button.component';
import { Wrapper } from '../components/Wrapper/styled';

export default function DiagnosisList({
  diagnosisData,
  columnsHeader,
  currentPage,
  lastPage,
  prevPage,
  nextPage,
  selectMode,
  toggleSelectRow,
  toggleSelectAll,
  isAllDataSelected,
  onSelectMode,
  selectedRows,
  activeTab,
  setActiveTab,
}: DiagnosisListProps) {
  return (
    <Wrapper>
      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
      <Container space={5} padding={1.5}>
        <Row align="space-between">
          <Title3>
            <b>Histórico de análises</b>
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
              <>
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

                <ButtonSecondary
                  gray
                  width="fit-content"
                  height={3.7}
                  content={
                    <>
                      <Filter width={23} height={23} /> Filtros
                    </>
                  }
                  onClick={() => {}}
                />
              </>
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

            <ButtonPrimary
              width="fit-content"
              height={3.7}
              content={
                <>
                  <Download width={23} height={23} /> Download
                </>
              }
              onClick={() => {}}
            />
          </Row>
        </Row>
        <Column width="100%" height="100%" justify="space-between">
          <DataTable
            data={diagnosisData}
            columns={columnsHeader}
            action
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
    </Wrapper>
  );
}
