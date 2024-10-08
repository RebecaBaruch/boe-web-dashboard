/* eslint-disable prettier/prettier */
export interface InputProps {
  value: string;
  placeholder?: string;
  name: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  readOnly?: boolean;
  disabled?: boolean;
  error?: boolean;   
  isFocused?: boolean;
  isFilled?: boolean; 
  isDisabled?: boolean;
  isError?: boolean;  
}
