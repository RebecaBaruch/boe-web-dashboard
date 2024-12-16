import styled from 'styled-components';

interface InfoCardContainerProps {
  border?: boolean;
}

export const InfoCardContainer = styled.div.withConfig({
  shouldForwardProp: (prop) => !['border'].includes(prop),
})<InfoCardContainerProps>`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: '30px';
  width: 100%;
  height: 100%;
  border: ${({ border }) => (border ? '3px solid #F1F1F1' : 'none')};
`;

export const InfoCardContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: '16px';
`;
