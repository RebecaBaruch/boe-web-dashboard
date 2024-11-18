import styled from 'styled-components';

type StyledInputProps = {
  isFocused: boolean;
  isFilled: boolean;
  disabled: boolean;
  error: boolean;
};

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) =>
    !['isFocused', 'isFilled', 'disabled', 'error'].includes(prop),
})<StyledInputProps>`
  width: 100%;
  height: 3rem;
  border-radius: 10px;
  border: 1px solid #a6a5b0;
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #171a21;
  transition: border 0.3s;

  &::placeholder {
    color: #a6a5b0;
  }

  ${({ isFocused }) =>
    isFocused &&
    `
    outline: 1.5px solid #282FD9;
    &::placeholder {
      color: #171A21;
    }
  `}

  ${({ isFilled }) =>
    isFilled &&
    `
    border: 1px solid #A6A5B0; /* Adiciona uma borda normal quando preenchido */
    
    &::placeholder {
      color: #171A21; /* Muda a cor do placeholder */
    }
  `}

  ${({ disabled }) =>
    disabled &&
    `
      pointer-events: none; /* Garante que o input não pode ser clicado */
      border: none; /* Sem borda */
      outline: none;
      background-color: rgba(166, 165, 176, 0.15); /* Cor de fundo quando desativado */
      color: #171A21; /* Cor do texto */

      &::placeholder {
        color: #171A21;
      }
    `}

  ${({ error }) =>
    error &&
    `
    outline: 1.5x solid #FF5454;
  `}
`;

export const StyledPasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #666;

  &:focus {
    outline: none;
  }
`;