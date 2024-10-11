import styled from 'styled-components';

type RowProps = {
  width?: string;
  space?: string;
};

export const Row = styled.div.withConfig({
  shouldForwardProp: (prop) => !['width', 'space'].includes(prop),
})<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ space }) => space || '1rem'};
  width: ${({ width }) => width || '100%'};
`;
