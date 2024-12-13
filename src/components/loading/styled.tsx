import styled from 'styled-components';

export const LoadingContainer = styled.div<{ absolute: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: ${(props) => (props.absolute ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  height: 100vh;
  width: ${(props) => (props.absolute ? '100%' : '100vw')};
  background-color: #ffffff;

  z-index: 10000000;
`;
