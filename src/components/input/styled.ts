import styled from 'styled-components';

export const StyledInput = styled.input<{
  isFocused: boolean;
  isFilled: boolean;
  isDisabled: boolean;
  isError: boolean;
}>`
  width: 100%;
  height: 48px;
  border-radius: 10px;
  border: 1px solid #a6a5b0;
  background-color: transparent;
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  color: #171a21;
  transition: border 0.3s; /* Adiciona uma transição suave */

  &::placeholder {
    color: #a6a5b0;
  }

  ${({ isFocused }) =>
    isFocused &&
    `
    outline: 2px solid #282FD9;
    &::placeholder {
      color: #171A21; /* Muda a cor do placeholder */
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

  ${({ isDisabled }) =>
    isDisabled &&
    `
    border: none; /* Sem borda */
    outline: none;
    background-color: rgba(166, 165, 176, 0.15); /* Cor de fundo quando desativado */
    color: #171A21; /* Cor do texto */

    &::placeholder {
      color: #171A21; /* Muda a cor do placeholder */
    }
  `}

  ${({ isError }) =>
    isError &&
    `
    outline: 2x solid #FF5454;
  `}
`;
