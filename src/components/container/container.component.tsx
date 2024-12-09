import styled from 'styled-components';

type ContainerProps = {
  align?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  padding?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingX?: number;
  paddingY?: number;
  direction?: 'row' | 'column';
  height?: number;
  width?: number;
  space?: number;
  backgroundColor?: string;
};

export const Container = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    ![
      'align',
      'padding',
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingX',
      'paddingY',
      'direction',
      'height',
      'width',
      'space',
      'width',
      'space',
      'backgroundColor',
    ].includes(prop),
})<ContainerProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'column'};
  justify-content: ${({ align }) => align || 'flex-start'};
  gap: ${({ space }) => space || 1}rem;

  padding: ${({ padding }) => (padding ? `${padding}rem` : '1rem')};
  padding-inline: ${({ paddingX }) => `${paddingX}rem`};
  padding-block: ${({ paddingY }) => `${paddingY}rem`};

  width: ${({ width }) => width || 100}%;
  height: ${({ height }) => height || 100}%;

  border-radius: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#ffffff'};
  box-sizing: border-box;
`;
