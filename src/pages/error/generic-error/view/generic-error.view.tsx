import React from 'react';
import { Stack, Text3 } from '@telefonica/mistica';
import Image from 'next/image';
import ButtonPrimary from 'components/button-primary/button-primary.component';
import ErrorWrapper from 'pages/error/components/error-wrapper';
import ErrorTitle from 'pages/error/components/error-title';
import { GenericErrorsProps } from '../types';

export default function GenericError({onBack}: GenericErrorsProps) {
  const CowGenericError: string = '/assets/cow-generic-error.svg';

  return (
    <ErrorWrapper>
      <Image
        src={CowGenericError}
        alt="cow-illustration"
        width={500}
        height={300}
      />

      <Stack space={4}>
        <ErrorTitle size={30} alignText="center">
          Opa, parece que algo deu errado...
        </ErrorTitle>
        <Text3 regular>
          Se o problema persistir, por favor tente novamente mais tarde!
        </Text3>
      </Stack>

      <ButtonPrimary content="Voltar" onClick={onBack} width={15} />
    </ErrorWrapper>
  );
}
