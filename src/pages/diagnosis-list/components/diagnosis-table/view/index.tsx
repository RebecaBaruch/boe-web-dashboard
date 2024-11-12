import React from 'react';
import { Column } from 'components/column/styled';
import DataTable from 'components/data-table/data-table.component';
import { Row } from 'components/row/styled';
import PageStepper from 'components/page-stepper/page-stepper.component';
import { DiagnosisListProps } from '../types';
import { Container } from 'components/container/container.component';
import { SearchField, Title3 } from '@telefonica/mistica';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { CheckSquare, ChevronDown, Download, Filter } from 'react-feather';
import ButtonPrimary from 'components/button-primary/button-primary.component';

export default function DiagnosisView({
  diagnosisData,
  diagnosisColumnsHeader,
  currentDiagnosisPage,
  lastDiagnosisPage,
  prevDiagnosisPage,
  nextDiagnosisPage,
  selectDiagnosisMode,
  toggleDiagnosisSelectRow,
  toggleDiagnosisSelectAll,
  isAllDiagnosisSelected,
  onDiagnosisSelectMode,
  selectedDiagnosisRows,
}: DiagnosisListProps) {
  return (
    <Container space={5} padding={1.5}>
      <Row align="space-between">
        <Title3>
          <b>Histórico de análises</b>
        </Title3>
        <Row width="fit-content">
          <SearchField label={''} name={''} />

          {selectDiagnosisMode ? (
            <ButtonSecondary
              gray
              width="fit-content"
              height={3.7}
              content="Selecionar todos"
              onClick={toggleDiagnosisSelectAll}
              selected={isAllDiagnosisSelected}
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
            onClick={onDiagnosisSelectMode}
            selected={selectDiagnosisMode}
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
          columns={diagnosisColumnsHeader}
          action
          selectMode={selectDiagnosisMode}
          selectedRows={selectedDiagnosisRows}
          toggleSelectRow={toggleDiagnosisSelectRow}
        />

        <Row align="flex-end">
          <PageStepper
            currentPage={currentDiagnosisPage}
            lastPage={lastDiagnosisPage}
            prevPage={prevDiagnosisPage}
            nextPage={nextDiagnosisPage}
          />
        </Row>
      </Column>
    </Container>
  );
}
