import React from 'react';
import { Button } from './styled';
import { ButtonSecondaryProps } from './types';

export default function ButtonSecondary({
  content,
  onClick,
  disabled,
  height,
  gray,
  blue,
}: ButtonSecondaryProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      height={height}
      gray={gray}
      blue={blue}
    >
      {content}
    </Button>
  );
}
