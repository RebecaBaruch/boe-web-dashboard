import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background-color: #ffffff;
  max-height: 450px;
  box-sizing: border-box;
  border: 1px solid #ddd;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #d3e7eb31;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f1f1f1;
  color: #717171;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  font-size: 0.9rem;
  color: #717171;
  border-bottom: 1px solid #ddd;
`;

export const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ActionButton = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3rem;
  background-color: #f2f2f5;
  outline: none;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #7e7b8e;

  &:hover {
    background-color: #e3e3eb;
  }
`;

export const ActionModal = styled.div`
  position: absolute;
  background-color: #a0a0b8;
  border-radius: 5px;
  padding: 1rem;
  width: fit-content;
  box-shadow: 0 0 10px rgba(76, 83, 101, 0.1);
  z-index: 1;
`;

export const ActionModalButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  outline: none;
  background-color: transparent;
  color: #373751;
  cursor: pointer;
`;
