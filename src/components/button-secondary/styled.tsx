import styled from 'styled-components';

type ButtonStyledProps = {
  disabled?: boolean;
  height?: string;
};

export const Button = styled.button<ButtonStyledProps>`
  width: 100%;
  height: ${({ height }) => (height ? height : '3.5rem')};
  margin: 0;
  padding: 0px 16px;
  border-radius: 10px;
  border: 1.7px solid #a6a5b0;
  outline: none;
  background-color: #ffffff;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #171a21;
  transition: 0.3s;

  &:hover {
    background-color: #a6a5b029;
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: #a6a5b085;
    border: none;

    &:hover {
      background-color: #a6a5b085;
      cursor: not-allowed;
    }
  `}
`;
