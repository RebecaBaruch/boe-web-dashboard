import styled from 'styled-components';

type ButtonStyledProps = {
  disabled?: boolean;
  height?: string;
  gray?: boolean;
  blue?: boolean;
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['gray', 'blue', 'disabled'].includes(prop),
})<ButtonStyledProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : '3.5rem')};
  margin: 0;
  padding: 0px 16px;
  border-radius: 10px;
  border: 1.7px solid ${({ gray }) => (gray ? '#a6a5b0' : '#282FD9')};
  outline: none;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: ${({ gray }) => (gray ? '#171a21' : '#282FD9')};
  transition: 0.3s;

  &:hover {
    background-color: ${({ gray }) => (gray ? '#a6a5b029' : '#2025c112')};
    cursor: pointer;
  }

  ${({ disabled, gray }) =>
    disabled &&
    `
    background-color: ${gray ? '#a6a5b085' : 'transparent'};
    border: ${gray ? 'none' : '1.7px solid rgba(40, 47, 217, 0.35)'};
    color: ${gray ? '#171a21' : 'rgba(40, 47, 217, 0.35)'};

    &:hover {
      background-color: ${gray ? '#a6a5b085' : 'transparent'};
      cursor: not-allowed;
    }
  `}
`;
