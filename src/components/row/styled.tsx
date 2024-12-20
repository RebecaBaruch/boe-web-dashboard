import styled from 'styled-components';

type RowProps = {
  width?: string;
  space?: string | number;
  align?:
    | 'space-between'
    | 'space-around'
    | 'center'
    | 'flex-start'
    | 'flex-end';
};

export const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'space', 'align'].includes(prop),
})<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ align }) => align || 'start'};
  gap: ${({ space }) => (space ? `${space}rem` : '1rem')};
  width: ${({ width }) => width || '100%'};
  padding: 0;
  margin: 0;
`;
