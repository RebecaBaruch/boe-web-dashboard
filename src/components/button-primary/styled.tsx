import styled from 'styled-components';
import { ButtonPrimaryProps } from './types';

type ButtonStyledProps = Pick<ButtonPrimaryProps, 'disabled' | 'width'>;

export const Button = styled.button<ButtonStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0px 16px;
  margin: 0;
  width: ${({ width }) => width ?? '100%'};
  height: 3.2rem;
  border-radius: 10px;
  border: none;
  outline: none;
  background-color: #282fd9;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    background-color: #1a1e96;
    cursor: pointer;
  }

  ${({ disabled }) =>
    disabled &&
    `
    background-color: rgba(40, 47, 217, 0.35);

    &:hover {
      background-color: rgba(40, 47, 217, 0.35);
      cursor: not-allowed;
    }
  `}
`;
