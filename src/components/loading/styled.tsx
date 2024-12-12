import styled from 'styled-components';

export const LoadingContainer = styled.div<{ absolute: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.absolute ? 'absolute' : 'fixed')};
  height: 100vh;
  width: ${(props) => (props.absolute ? '100%' : '100vw')};
  background-color: #ffffff;

  z-index: 10000000;
`;
