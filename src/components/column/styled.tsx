import styled from 'styled-components';

type ColumnProps = {
  width?: string;
  height?: string;
  space?: string;
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
};

export const Column = styled.div.withConfig({
  shouldForwardProp: (prop) =>
    !['width', 'space', 'justify', 'height'].includes(prop),
})<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: center;
  gap: ${({ space }) => space || '1rem'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'fit-content'};
`;
