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
  selected,
}: ButtonSecondaryProps) {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      width={width}
      height={height}
      gray={gray}
      blue={blue}
      selected={selected}
    >
      {content}
    </Button>
  );
}
