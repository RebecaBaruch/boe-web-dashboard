import React from 'react';
import { Button } from './styled';
import { ButtonPrimaryProps } from './types';

export default function ButtonPrimary({
  content,
  onClick,
  disabled,
  width,
  height,
}: ButtonPrimaryProps) {
  return (
    <Button disabled={disabled} onClick={onClick} width={width} height={height}>
      {content}
    </Button>
  );
}
