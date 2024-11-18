export interface InputProps {
  value: string;
  placeholder?: string;
  name: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void;
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;
  isFocused?: boolean;
  isFilled?: boolean;
  width?: string;
}
