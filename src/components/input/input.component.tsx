import React from 'react';
import { Box, Text2 } from '@telefonica/mistica';
import { InputProps } from './types';

export default function InputBox({ title, input }: InputProps) {
  return (
    <Box>
      <Text2 medium>{title}</Text2>
      {input}
    </Box>
  );
}
