import React from 'react';
import { Box, FadeIn, SkeletonRectangle, Stack } from '@telefonica/mistica';
import { SkeletonProps } from './types';
import { v4 as uuidv4 } from 'uuid';

export default function SkeletonComponent({
  repeatSkeleton,
  heightSkeleton,
  paddingYSkeleton,
  paddingXSkeleton,
}: SkeletonProps) {
  return (
    <Box paddingY={paddingYSkeleton} paddingX={paddingXSkeleton}>
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
