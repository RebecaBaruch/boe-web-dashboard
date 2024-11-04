import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
`;

export const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableHeader = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f9f9f9;
  color: #666;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
`;

export const TableCell = styled.td`
  padding: 12px;
  color: #333;
  border-bottom: 1px solid #ddd;
`;

export const Picture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ActionBtn = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #888;

  &:hover {
    color: #555;
  }
`;
