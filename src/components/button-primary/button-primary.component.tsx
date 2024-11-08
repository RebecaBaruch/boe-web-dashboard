import React from 'react';
import { Button } from './styled';
import { ButtonPrimaryProps } from './types';

export default function ButtonPrimary({
  content,
  onClick,
  disabled,
  width,
  height,
  tomato,
}: ButtonPrimaryProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      tomato={tomato}
    >
      {content}
    </Button>
  );
}
