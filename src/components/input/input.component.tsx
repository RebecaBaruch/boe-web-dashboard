import React from 'react';
import { InputProps } from './types'; // Ajuste o caminho de importação
import { StyledInput } from './styled'; // Ajuste o caminho de importação

export default function Input({
  placeholder,
  name,
  type,
  value,
  onChange,
  readOnly = false,
  disabled = false,
  error = false,
}: InputProps) {
  const [isFocused, setIsFocused] = React.useState(false);

  return (
    <StyledInput
      value={value}
      onChange={onChange}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      readOnly={readOnly}
      disabled={disabled}
      isFocused={isFocused}
      isFilled={!!value}
      error={error}
      placeholder={placeholder}
      name={name}
      type={type}
    />
  );
}
