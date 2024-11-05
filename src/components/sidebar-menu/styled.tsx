import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

export const Viewboard = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: start;
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding: 25px 25px 25px 25px;
  width: 100%;
  transition: width 0.3s ease;
  box-sizing: border-box;
  background-color: #f1f1f1;

  @media (max-width: 1280px) {
    padding: 15px 30px;
  }

  @media (max-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const Sidebar = styled.div<{ isExpanded: boolean }>`
  width: ${(props) => (props.isExpanded ? '210px' : '85px')};
  height: 100%;
  transition: width 1s ease;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  border-right: 0.5px solid #63607530;
  box-sizing: border-box;

  @media (max-width: 1280px) {
    width: ${(props) => (props.isExpanded ? '180px' : '60px')};
  }

  @media (max-width: 1024px) {
    width: ${(props) => (props.isExpanded ? '150px' : '50px')};
  }
`;

export const NavItemsBox = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding: 0;
  transition: width 0.5s ease;
`;

export const NavItem = styled.div`
  width: 100%;
  transition: width 0.3s ease;
`;

export const NavButton = styled.button<{
  active?: boolean;
  isExpanded: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isExpanded ? 'flex-start' : 'center')};
  gap: ${(props) => (props.isExpanded ? '.8rem' : '0')};
  width: 100%;
  padding: 0.7rem;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;

  text-align: left;
  white-space: nowrap;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  color: ${(props) => (props.active ? '#ffffff' : '#636075')};
  background-color: ${(props) => (props.active ? '#282FD9' : '#F2F2F5')};

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 123, 255, 0.1);
  }

  @media (max-width: 1024px) {
    height: 50px;
    padding: 5px;
  }
`;

export const CollapseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.7rem;
  color: #636075;
  background-color: #ffffff;
  border: 1px solid #6360754a;
  border-radius: 10px;
  outline: none;
  cursor: pointer;
  transition: width 0.3s ease;

  @media (max-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

export const ButtonWrapper = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => (props.isExpanded ? 'flex-end' : 'center')};
  align-items: center;
  transition: width 0.3s ease;
`;

export const BoeText = styled.h1<{ isVisible: boolean }>`
  margin: 0;
  padding: 0;
  font-size: 1.3rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  color: #171a21;

  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? 'translateY(0)' : 'translateY(-10px)'};
  transition:
    opacity 0.3s ease-in-out,
    transform 0.3s ease-in-out;

  &::before {
    content: 'Böe';
  }
`;
