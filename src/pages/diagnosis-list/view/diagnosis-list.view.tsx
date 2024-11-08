import { Container } from 'components/container/container.component';
import DataTable from 'components/data-table/data-table.component';
import React from 'react';
import { diagnosisListColumns } from 'config/constants/column-headers';
import { DiagnosisListProps } from '../types';
import { Row } from 'components/row/styled';
import { Title3 } from '@telefonica/mistica';

export default function DiagnosisList({ diagnosisData }: DiagnosisListProps) {
  return (
    <Container space={5} padding={1.5}>
      <Row>
        <Title3>
          <b>Contas vinculadas</b>
        </Title3>
      </Row>
      <DataTable data={diagnosisData} columns={diagnosisListColumns} action />
    </Container>
  );
}
