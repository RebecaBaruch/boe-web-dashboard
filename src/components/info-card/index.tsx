import React from 'react';
import Image from 'next/image';
import { InfoCardProps } from './types';
import { InfoCardContainer, InfoCardContent } from './styled';
import { Text3, Title3 } from '@telefonica/mistica';
import ButtonPrimary from '../button-primary/button-primary.component';

export default function InfoCard({
  type,
  action,
  empty,
  title,
  description,
  border,
  onClick,
}: InfoCardProps) {
  const EmptyAnimals = () => {
    return (
      <Image
        src={'/assets/empty-data-cow.svg'}
        alt={'empty-state-cow-illustration'}
        width={370}
        height={266}
      />
    );
  };

  const EmptyStateGeneric = () => {
    return (
      <Image
        src={'/assets/empty-data.svg'}
        alt={'empty-state-generic-illustration'}
      />
    );
  };

  const EmptyState = () => {
    switch (empty) {
      case 'accounts':
        return <EmptyStateGeneric />;
      case 'animals':
        return <EmptyAnimals />;
      default:
        return <EmptyStateGeneric />;
    }
  };

  return (
    <InfoCardContainer border={border}>
      {type == 'empty-state' && <EmptyState />}
      <InfoCardContent>
        <Title3>{title}</Title3>
        <Text3 light>{description}</Text3>
        {action && (
          <ButtonPrimary
            content={action}
            width="fit-content"
            onClick={() => onClick}
          />
        )}
      </InfoCardContent>
    </InfoCardContainer>
  );
}
