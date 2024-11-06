import React from 'react';
import { Button } from './styled';
import { ButtonSecondaryProps } from './types';

export default function ButtonSecondary({
  content,
  onClick,
  disabled,
  width,
  height,
  gray,
  blue,
}: ButtonSecondaryProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height?.toString()}
      gray={gray}
      blue={blue}
    >
      {content}
    </Button>
  );
}
