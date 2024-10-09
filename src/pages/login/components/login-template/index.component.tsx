import styled from 'styled-components';
import { StyledDivProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  margin: 0;
`;

export const SideWrapper = styled.div<StyledDivProps>`
  display: flex;
  align-items: ${({ align }) => (align ? align : 'center')};
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  width: 50%;
  height: 100%;
  background-image: ${({ bgImage }) => (bgImage ? `url(${bgImage})` : 'none')};
  background-size: cover;
  background-position: center;
`;
