export interface ButtonPrimaryProps {
  content: string | React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  width?: number | string | 'fit-content';
}
