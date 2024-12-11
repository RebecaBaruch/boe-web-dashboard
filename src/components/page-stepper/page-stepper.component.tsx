import React from 'react';
import { PageStepperProps } from './types';
import { Row } from '../row/styled';
import { Step, StepperButton } from './styled';
import { ChevronLeft, ChevronRight } from 'react-feather';

export default function PageStepper({
  currentPage,
  lastPage,
  prevPage,
  nextPage,
}: PageStepperProps) {
  return (
    <Row space={1.7} width="fit-content">
      <StepperButton onClick={prevPage}>
        <ChevronLeft width={23} height={23} />
        Prev
      </StepperButton>

      <Row space={0.7}>
        <Step active>{currentPage}</Step> - <Step>{lastPage}</Step>
      </Row>

      <StepperButton onClick={nextPage}>
        Prox
        <ChevronRight width={23} height={23} />
      </StepperButton>
    </Row>
  );
}
