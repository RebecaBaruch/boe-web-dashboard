import React from 'react';
import { HomeProps } from '../types';
import { Box, Stack, Text4, Text7 } from '@telefonica/mistica';

export default function Home({ greetingText, userName }: HomeProps) {
  return (
    <>
      <Box width="100%">
        <Stack space={4}>
          <Text4 regular>{greetingText + ', ' + userName}</Text4>
          <Text7>
            <b>Overview</b>
          </Text7>
        </Stack>
      </Box>
    </>
  );
}
