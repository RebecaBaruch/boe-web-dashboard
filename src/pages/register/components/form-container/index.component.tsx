import React from 'react';
import { Wrapper } from './styled';

interface FormContainerProps {
  formHeader: React.ReactNode;
  form: React.ReactNode;
}

export default function FormContainer({
  formHeader,
  form,
}: FormContainerProps) {
  return (
    <Wrapper>
      {formHeader}
      {form}
    </Wrapper>
  );
}
