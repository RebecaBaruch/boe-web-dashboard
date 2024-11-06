export interface ButtonSecondaryProps {
  content: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  width?: string | 'fit-content';
  height?: string | number;
  gray?: boolean;
  blue?: boolean;
}
