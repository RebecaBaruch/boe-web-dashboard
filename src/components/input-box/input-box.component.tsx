import React from 'react';
import { Box, Stack, Text2 } from '@telefonica/mistica';
import { InputProps } from './types';

export default function InputBox({ title, input }: InputProps) {
  return (
    <Box width="100%">
      <Stack space={4}>
        <Text2 medium>{title}</Text2>
        {input}
      </Stack>
    </Box>
  );
}
