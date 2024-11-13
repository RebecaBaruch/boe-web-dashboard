import React from 'react';
import { Table, TableRow, TableHeader, TableCell } from './styled';
import { TableProps } from './types';
import {
  renderActionCell,
  renderActionModal,
  renderCell,
} from './utils/table-helpers';

const DataTable = ({
  data,
  columns,
  action,
  selectMode,
  selectedRows,
  toggleSelectRow,
}: TableProps) => {
  const [activeRowIndex, setActiveRowIndex] = React.useState<number | null>(
    null,
  );

  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const tableRef = React.useRef<HTMLTableElement | null>(null);

  const onAction = React.useCallback((rowIndex: number) => {
    setActiveRowIndex((prevIndex) =>
      prevIndex === rowIndex ? null : rowIndex,
    );
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setActiveRowIndex(null);
      }
    };

    if (activeRowIndex !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeRowIndex]);

  return (
    <Table ref={tableRef}>
      <thead>
        <TableRow>
          {columns.map((col, index) => (
            <TableHeader key={index}>{col.header}</TableHeader>
          ))}
          {action && <TableHeader>Ação</TableHeader>}
        </TableRow>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((col, colIndex) => (
              <TableCell key={colIndex}>{renderCell(col, item)}</TableCell>
            ))}
            {action && (
              <>
                {renderActionCell({
                  action,
                  selectMode,
                  isSelected: selectedRows?.has(item.id) ?? false,
                  toggleSelectRow,
                  item,
                  rowIndex,
                  onAction,
                })}
              </>
            )}
            {renderActionModal({
              activeRowIndex,
              rowIndex,
              action,
              modalRef,
              data,
            })}
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
export default DataTable;
