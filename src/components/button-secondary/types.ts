export type SizeProp =
  | number
  | string
  | { value: number; unit: 'rem' | '%' | 'px' | 'fit-content' };

export interface ButtonSecondaryProps {
  content: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  width?: string | 'fit-content';
  height?: SizeProp;
  gray?: boolean;
  blue?: boolean;
  selected?: boolean;
}
