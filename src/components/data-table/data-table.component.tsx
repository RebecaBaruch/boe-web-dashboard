import React from 'react';
import {
  Table,
  TableRow,
  TableHeader,
  TableCell,
  ActionButton,
  ActionModal,
  ActionModalButton,
} from './styled';
import { TableProps } from './types';
import { MoreVertical, Trash } from 'react-feather';
import { Checkbox, Text1 } from '@telefonica/mistica';

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
  const [modalPosition, setModalPosition] = React.useState<{
    top: number;
    left: number;
  } | null>(null);

  const modalRef = React.useRef<HTMLDivElement | null>(null);

  const onAction = React.useCallback(
    (rowIndex: number, event: React.MouseEvent) => {
      const { clientY, clientX } = event;

      setModalPosition({ top: clientY, left: clientX - 100 });
      setActiveRowIndex((prevIndex) =>
        prevIndex === rowIndex ? null : rowIndex,
      );
    },
    [],
  );

  const onDelete = React.useCallback((rowIndex: number) => {
    console.log(rowIndex);
    setActiveRowIndex(null);
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
    <Table>
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
              <TableCell key={colIndex}>
                {col.render ? col.render(item) : item[col.accessor!]}
              </TableCell>
            ))}
            {action && (
              <TableCell>
                {selectMode ? (
                  <Checkbox
                    name="select"
                    checked={selectedRows?.has(rowIndex) ?? false}
                    onChange={() => toggleSelectRow?.(rowIndex)}
                  />
                ) : (
                  <ActionButton onClick={(event) => onAction(rowIndex, event)}>
                    <MoreVertical width={17} height={17} />
                  </ActionButton>
                )}
              </TableCell>
            )}
          </TableRow>
        ))}
        {activeRowIndex !== null && modalPosition && (
          <ActionModal
            ref={modalRef}
            style={{
              position: 'absolute',
              top: modalPosition.top + 10,
              left: modalPosition.left,
            }}
          >
            <ActionModalButton onClick={() => onDelete(activeRowIndex)}>
              <Trash width={18} height={18} /> <Text1 regular>Excluir</Text1>
            </ActionModalButton>
          </ActionModal>
        )}
      </tbody>
    </Table>
  );
};

export default DataTable;
