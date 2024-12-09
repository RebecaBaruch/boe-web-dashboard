import React from 'react';
import { Column } from 'components/column/styled';
import DataTable from 'components/data-table/data-table.component';
import { Row } from 'components/row/styled';
import PageStepper from 'components/page-stepper/page-stepper.component';
import { DiagnosisListProps } from '../types';
import { Container } from 'components/container/container.component';
import { SearchField, Title3 } from '@telefonica/mistica';
import ButtonSecondary from 'components/button-secondary/button-secondary.component';
import { ChevronDown, Download, Filter } from 'react-feather';
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
  selectedDiagnosisRows,
  onDownload,
}: DiagnosisListProps) {
  return (
    <Container space={2} padding={1.5}>
      <Row align="space-between">
        <Title3>
          <b>Histórico de análises</b>
        </Title3>
        <Row width="fit-content">
          <SearchField label={''} name={''} />

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

          <ButtonPrimary
            width="fit-content"
            height={3.7}
            content={
              <>
                <Download width={23} height={23} /> Download
              </>
            }
            onClick={onDownload}
          />
        </Row>
      </Row>
      <Column width="100%" height="100%" justify="space-between">
        <DataTable
          data={diagnosisData}
          columns={diagnosisColumnsHeader}
          action="download"
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
