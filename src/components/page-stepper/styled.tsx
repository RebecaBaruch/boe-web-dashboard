import styled from 'styled-components';

type StepProps = {
  active?: boolean;
};

export const StepperButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
  font-size: 1rem;
  padding: 0.5rem;
  height: 2rem;
  outline: none;
  border: none;
  border-radius: 5px;
  color: #717171;
  background-color: #f1f1f1;
  cursor: pointer;

  box-sizing: border-box;

  &:hover {
    background-color: #dddddd;
  }
`;

export const Step = styled.div.withConfig({
  shouldForwardProp: (prop) => !['active'].includes(prop),
})<StepProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.5rem;
  width: 1rem;
  height: 1rem;
  border-radius: 5px;
  background-color: ${({ active }) => (active ? '#282ed93a' : '#ffffff')};
  border: ${({ active }) => (active ? 'none' : '1px solid #717171')};
  color: ${({ active }) => (active ? '#282FD9' : '#717171')};
`;
