import React from 'react';
import { Table, TableRow, TableHeader, TableCell } from './styled';
import { TableProps } from './types';

const Tabela = ({ data, columns }: TableProps) => {
  return (
    <Table>
      <thead>
        <TableRow>
          {columns.map((col, index) => (
            <TableHeader key={index}>{col.header}</TableHeader>
          ))}
        </TableRow>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>
                {col.render ? col.render(item, rowIndex) : item[col.accessor!]}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export default Tabela;
