import styled from 'styled-components';

type ColumnProps = {
  width?: string;
  space?: string;
};

export const Column = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'space'].includes(prop),
})<ColumnProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ space }) => space || '1rem'};
  width: ${({ width }) => width || '100%'};
`;
