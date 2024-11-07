import styled from 'styled-components';
import { SizeProp } from './types';

type ButtonStyledProps = {
  disabled?: boolean;
  height?: SizeProp;
  gray?: boolean;
  blue?: boolean;
  selected?: boolean;
  width?: SizeProp;
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['gray', 'blue', 'disabled', 'width', 'selected'].includes(prop),
})<ButtonStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0px 16px;
  margin: 0;
  width: ${({ width }) => {
    if (typeof width === 'number') return `${width}rem`;
    if (typeof width === 'object' && width.unit)
      return `${width.value}${width.unit}`;
    if (typeof width === 'string' && width === 'fit-content')
      return 'fit-content';
    return '100%';
  }};
  height: ${({ height }) => {
    if (typeof height === 'number') return `${height}rem`;
    if (typeof height === 'object' && height.unit)
      return `${height.value}${height.unit}`;
    if (typeof height === 'string' && height.endsWith('%')) {
      return height;
    }
    return '3.2rem';
  }};
  border-radius: 10px;
  border: 1.7px solid
    ${({ gray, blue, selected }) => {
      const colorMap = {
        selected: '#0080F8',
        gray: '#a6a5b0',
        blue: '#282FD9',
      };

      if (selected) return colorMap.selected;
      if (gray) return colorMap.gray;
      if (blue) return colorMap.blue;
      return colorMap.gray;
    }};
  outline: none;
  background-color: #ffffff;

  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ gray }) => (gray ? '#8a8992' : '#282FD9')};
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

  ${({ selected }) =>
    selected &&
    `
    background-color: #0080f82b;
    color: #0080F8;
  `}
`;
