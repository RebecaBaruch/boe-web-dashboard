import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: #f8f8fa;
`;

export const ProfileNavigatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 20%;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  background-color: #ffffff;
`;

export const ProfileContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 20px 20px 20px;
  border-radius: 10px;
  background-color: #ffffff;
  width: 100%;
`;

export const ProfileNavButton = styled.button<{active}>`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  outline: none;

  background-color: ${({ active }) => (active ? '#282FD9' : 'transparent')};
  color: ${({ active }) => (active ? '#FFFFFF' : '#717171')};
  font-size: 1rem;
  cursor: pointer;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
