import styled from 'styled-components';

export const Bar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  width: 100%;
  height: 4%;
  background-color: #ffffff;
  box-shadow: 0px 2px 41.1px rgba(120, 168, 197, 0.208);

  z-index: 9999;
`;

export const DataContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.9rem;
  color: #0080f8;
`;
