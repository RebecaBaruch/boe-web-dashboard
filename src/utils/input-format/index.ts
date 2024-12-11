export const formatPhone = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, '');

  const maxLength = 11;

  if (onlyNumbers.length == maxLength) {
    return `(${onlyNumbers.slice(0, 2)}) ${onlyNumbers.slice(2, 7)}-${onlyNumbers.slice(7, 11)}`;
  }
};

export const formatCep = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, '');

  const maxLength = 8;

  if (onlyNumbers.length == maxLength) {
    return `${onlyNumbers.slice(0, 5)}-${onlyNumbers.slice(5, 8)}`;
  }
};

export const formatCnpj = (value: string) => {
  const onlyNumbers = value.replace(/\D/g, '');

  const maxLength = 14;

  if (onlyNumbers.length == maxLength) {
    return `${onlyNumbers.slice(0, 2)}.${onlyNumbers.slice(2, 5)}.${onlyNumbers.slice(5, 8)}/${onlyNumbers.slice(8, 12)}-${onlyNumbers.slice(12, 14)}`;
  }
};

export const togglePasswordVisibility = (
  isVisible: boolean,
  value: string,
): { inputType: string; displayValue: string } => {
  return {
    inputType: isVisible ? 'text' : 'password',
    displayValue: isVisible ? value : '*'.repeat(value.length), // Oculta a senha com asteriscos
  };
};

export const isValidEmail = (email: string | undefined) => {
  if (!email) return false;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
