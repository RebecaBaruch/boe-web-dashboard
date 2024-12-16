import React from 'react';
import { Column } from '../../../../../components/column/styled';
import DataTable from '../../../../../components/data-table/data-table.component';
import { Row } from '../../../../../components/row/styled';
import PageStepper from '../../../../../components/page-stepper/page-stepper.component';
import { AnimalsListProps } from '../types';
import { Container } from '../../../../../components/container/container.component';
import { SearchField, Title3 } from '@telefonica/mistica';
import ButtonSecondary from '../../../../../components/button-secondary/button-secondary.component';
import { Filter } from 'react-feather';
import InfoCard from '../../../../../components/info-card';
import SkeletonComponent from '../../../../../components/skeleton';

export default function AnimalsView({
  animalsData,
  animalsColumnsHeader,
  currentAnimalsPage,
  lastAnimalsPage,
  prevAnimalsPage,
  nextAnimalsPage,
  isLoading,
}: AnimalsListProps) {
  const Loading = () => {
    return <SkeletonComponent repeatSkeleton={1} heightSkeleton={470} />;
  };

  const ContentRender = () => {
    if (isLoading) {
      return <Loading />;
    }

    // eslint-disable-next-line react/prop-types
    if (animalsData.length === 0) {
      return (
        <InfoCard
          type="empty-state"
          empty="animals"
          title="Nenhum animal foi encontrado"
          description="Os animais registrados pelas contas associadas à sua fazenda aparecerão aqui!"
          border
        />
      );
    }

    return (
      <Column width="100%" height="100%" justify="space-between">
        <DataTable data={animalsData} columns={animalsColumnsHeader} />

        <Row align="flex-end">
          <PageStepper
            currentPage={currentAnimalsPage}
            lastPage={lastAnimalsPage}
            prevPage={prevAnimalsPage}
            nextPage={nextAnimalsPage}
          />
        </Row>
      </Column>
    );
  };

  return (
    <Container space={2} padding={1.5}>
      <Row align="space-between">
        <Title3>
          <b>Animais registrados</b>
        </Title3>
        <Row width="fit-content" space={3}>
          <SearchField label={''} name={''} />

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
        </Row>
      </Row>
      {ContentRender()}
    </Container>
  );
}
