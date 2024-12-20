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

export const TabButton = styled.button<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 20px 20px;
  margin: 0;
  border: none;
  cursor: pointer;
  background-color: ${({ active }) => (active ? '#4a2eff' : '#dcdbe3')};
  color: ${({ active }) => (active ? '#fff' : '#333')};
  border-radius: 20px 20px 0 0;
  font-size: 0.9rem;
  font-weight: ${({ active }) => (active ? 'bold' : 'regular')};
  transition:
    background-color 0.3s,
    color 0.3s;
`;
