import React from 'react';
import { Box, FadeIn, SkeletonRectangle, Stack } from '@telefonica/mistica';
import { SkeletonProps } from './types';
import { v4 as uuidv4 } from 'uuid';
import { ByBreakpoint } from '@telefonica/mistica/dist/utils/types';

type PadSize =
  | 0
  | 2
  | 4
  | 8
  | 12
  | 16
  | 20
  | 24
  | 32
  | 40
  | 48
  | 56
  | 64
  | 72
  | 80;
export default function SkeletonComponent({
  repeatSkeleton,
  heightSkeleton,
  paddingYSkeleton,
  paddingXSkeleton,
}: SkeletonProps) {
  return (
    <Box
      paddingY={paddingYSkeleton as ByBreakpoint<PadSize>}
      paddingX={paddingXSkeleton as ByBreakpoint<PadSize>}
    >
      <FadeIn duration="0.25s">
        <Stack space={8}>
          {Array.from({ length: repeatSkeleton }).map(() => (
            <SkeletonRectangle
              key={uuidv4()}
              ariaLabel="loading"
              height={heightSkeleton}
              width="100%"
            />
          ))}
        </Stack>
      </FadeIn>
    </Box>
  );
}
