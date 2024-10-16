import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const Sidebar = styled.div<{ isExpanded: boolean }>`
  width: ${(props) => (props.isExpanded ? '220px' : '100px')};
  height: 100%;
  transition: width 0.3s ease;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-right: 0.5px solid #63607530;
  box-sizing: border-box;
`;

export const NavItemsBox = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 0;
  transition: width 0.3s ease;
`;

export const NavItem = styled.div`
  width: 100%;
  transition: width 0.3s ease;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px 40px;
  transition: width 0.3s ease;
  box-sizing: border-box;
`;

export const NavButton = styled.button<{
  active?: boolean;
  isExpanded: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isExpanded ? 'flex-start' : 'center')};
  gap: 1rem;
  width: 100%;
  height: 60px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  text-align: left;
  white-space: nowrap;
  cursor: pointer;
  color: ${(props) => (props.active ? '#ffffff' : '#636075')};
  background-color: ${(props) => (props.active ? '#282FD9' : '#F2F2F5')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }
`;

export const CollapseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  padding: 10px;
  color: #636075;
  background-color: #ffffff;
  border: 1px solid #6360754a;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: width 0.3s ease;
`;

export const ButtonWrapper = styled.div<{
  isExpanded: boolean;
}>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isExpanded ? 'flex-end' : 'center')};
  align-items: center;
  transition: width 0.3s ease;
`;
