import styled from 'styled-components';

type SizeProp =
  | number
  | string
  | { value: number; unit: 'rem' | '%' | 'px' | 'fit-content' };

type ButtonStyledProps = {
  disabled?: boolean;
  height?: SizeProp;
  width?: SizeProp;
  tomato?: boolean;
};

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    !['disabled', 'width', 'height', 'tomato'].includes(prop),
})<ButtonStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0px 16px;
  margin: 0;
  box-sizing: border-box;
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
  border: none;
  outline: none;
  background-color: ${({ tomato }) => (tomato ? '#FF5454' : '#282fd9')};

  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  transition: 0.3s;

  &:hover {
    background-color: ${({ tomato }) => (tomato ? '#9c2f2f' : '#1a1e96')};
    cursor: pointer;
  }

  ${({ disabled, tomato }) =>
    disabled &&
    `
    background-color: ${tomato ? '#ff545490' : 'rgba(40, 47, 217, 0.35)'};

    &:hover {
      background-color: ${tomato ? '#ff545490' : 'rgba(40, 47, 217, 0.35)'};
      cursor: not-allowed;
    }
  `}
`;
