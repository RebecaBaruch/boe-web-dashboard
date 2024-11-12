import styled from 'styled-components';
import {
  getResultColor,
  getResultTextColor,
  getRiskColor,
  getRiskTextColor,
  getStatusColor,
  getStatusTextColor,
} from 'utils/color-utils';

export const RiskIndicator = styled.span<{ risk: number }>`
  background-color: ${({ risk }) => getRiskColor(risk)};
  width: 20px;
  height: 10px;
  border-radius: 20px;
  display: inline-block;
`;

export const AnimalIdContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const AnimalPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  background-color: #e3e3e3;
`;

export const ResultBadge = styled.span<{ result: string }>`
  background-color: ${({ result }) => getResultColor(result)};
  color: ${({ result }) => getResultTextColor(result)};
  padding: 4px 8px;
  border-radius: 8px;
`;

export const RiskBadge = styled.div<{ risk: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.3rem;
  background-color: ${({ risk }) => getRiskColor(risk)};
  padding: 4px 8px;
  color: ${({ risk }) => getRiskTextColor(risk)};
  border-radius: 8px;
`;

export const AuthorContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 12rem;
  padding: 4px 15px;
  border-radius: 10px;
  background-color: #f2f2f5;
`;

export const AuthorPhoto = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 8px;
`;

export const StatusBadge = styled.div<{ status: string }>`
  width: fit-content;
  background-color: ${({ status }) => getStatusColor(status)};
  color: ${({ status }) => getStatusTextColor(status)};
  padding: 4px 8px;
  border-radius: 8px;
  font-weight: 500;
`;
