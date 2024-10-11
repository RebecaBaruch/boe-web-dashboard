import React from 'react';
import { Text2 } from '@telefonica/mistica';
import { InputProps } from './types';
import { StyledBox } from './syled';

export default function InputBox({ title, input, size }: InputProps) {
  return (
    <StyledBox size={size}>
      <Text2 medium>{title}</Text2>
      {input}
    </StyledBox>
  );
}
