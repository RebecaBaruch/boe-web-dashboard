import React from 'react';
import { Stack, Text3 } from '@telefonica/mistica';
import { InputProps } from './types';

export default function InputBox({ title, input }: InputProps) {
  return (
    <Stack space={8}>
      <Text3 medium>{title}</Text3>
      {input}
    </Stack>
  );
}
