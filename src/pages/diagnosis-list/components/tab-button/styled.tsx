import styled from 'styled-components';

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0;
  overflow: hidden;
  border-radius: 20px 20px 0 0;
  width: 30rem;
  height: 3rem;
  background-color: #dcdbe3;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  width: 50%;
  padding: 10px 20px;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: ${({ isActive }) => (isActive ? '#4a2eff' : '#dcdbe3')};
  color: ${({ isActive }) => (isActive ? '#fff' : '#333')};
  border-radius: 20px 20px 0 0;
  font-weight: bold;
  transition:
    background-color 0.3s,
    color 0.3s;
`;
