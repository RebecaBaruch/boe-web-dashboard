import React from 'react';
import { InputProps } from './types';
import { StyledInput, StyledPasswordToggle } from './styled';
import { formatCep, formatCnpj, formatPhone } from '../../utils/input-format';

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
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = React.useCallback(() => {
    setShowPassword((prevState) => !prevState);
  }, []);

  const renderPasswordToggle = () => {
    if (type === 'password') {
      return (
        <StyledPasswordToggle
          onClick={togglePasswordVisibility}
          type="button"
          aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
        >
          {showPassword ? '🙈' : '👁️'}
        </StyledPasswordToggle>
      );
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value;
    let formattedValue;

    switch (type) {
      case 'phone':
        formattedValue = formatPhone(value);
        break;
      case 'cep':
        formattedValue = formatCep(value);
        break;
      case 'cnpj':
        formattedValue = formatCnpj(value);
        break;
      default:
        formattedValue = value;
        break;
    }

    const simulatedEvent: React.ChangeEvent<HTMLInputElement> = {
      ...e,
      target: { ...e.target, value: formattedValue },
    };

    onChange(simulatedEvent);
  };

  return (
    <div style={{ position: 'relative' }}>
      <StyledInput
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        readOnly={readOnly}
        disabled={disabled}
        isFocused={isFocused}
        isFilled={!!value}
        error={error}
        placeholder={placeholder}
        name={name}
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
      />

      {renderPasswordToggle()}
    </div>
  );
}
