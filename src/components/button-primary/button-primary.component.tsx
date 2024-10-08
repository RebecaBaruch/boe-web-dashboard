import React from 'react';
import { Button } from './styled';
import { ButtonPrimaryProps } from './types';

export default function ButtonPrimary({
  content,
  onClick,
  disabled,
}: ButtonPrimaryProps) {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {content}
    </Button>
  );
}
