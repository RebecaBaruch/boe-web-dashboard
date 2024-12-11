import styled from 'styled-components';

type StyledBoxProps = {
  size?: string | number;
};

export const StyledBox = styled.div.withConfig({
  shouldForwardProp: (prop) => !['size'].includes(prop),
})<StyledBoxProps>`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: ${({ size }) => (typeof size === 'number' ? `${size}` : size || 'auto')};
  gap: 0.3rem;
  display: flex;
  margin: 0;
  padding: 0;
`;
