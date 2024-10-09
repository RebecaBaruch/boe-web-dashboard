import React from 'react';
import { Button } from './styled';
import { ButtonSecondaryProps } from './types';

export default function ButtonSecondary({
  content,
  onClick,
  disabled,
  height,
}: ButtonSecondaryProps) {
  return (
    <Button disabled={disabled} onClick={onClick} height={height}>
      {content}
    </Button>
  );
}
