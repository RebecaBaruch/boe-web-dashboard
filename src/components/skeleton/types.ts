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

export interface SkeletonProps {
  repeatSkeleton: number;
  heightSkeleton: number;
  paddingYSkeleton?: ByBreakpoint<PadSize>;
  paddingXSkeleton?: ByBreakpoint<PadSize>;
}
