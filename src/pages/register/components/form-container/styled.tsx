import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 650px;
  max-width: 30%;
  padding: 30px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.12);

  @media (max-width: 1200px) {
    max-width: 50%;
  }

  @media (max-width: 800px) {
    max-width: 80%;
    padding: 20px;
  }

  @media (max-width: 500px) {
    max-width: 90%;
    padding: 15px;
  }
`;
