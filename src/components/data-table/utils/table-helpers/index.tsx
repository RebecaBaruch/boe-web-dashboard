import React from 'react';
import { Checkbox } from '@telefonica/mistica';
import { ActionButton, ActionModal, TableCell } from '../../styled';
import { MoreVertical } from 'react-feather';
import ActionButtons from 'components/data-table/action-buttons/action-buttons.component';

import {
  TableAccountsData,
  TableDiagnosisData,
  TableAnimalsData,
  Column,
} from '../../types';

interface SelectableCellProps {
  isSelected: boolean;
  onSelect: () => void;
}

interface ActionCellProps {
  onActionClick: () => void;
}

interface RenderActionCellProps {
  action?: 'download' | 'delete';
  selectMode?: boolean;
  isSelected: boolean;
  toggleSelectRow?: (id: string) => void;
  item: TableAccountsData | TableDiagnosisData | TableAnimalsData;
  rowIndex: number;
  onAction: (rowIndex: number) => void;
}

interface RenderActionModalProps {
  activeRowIndex: number | null;
  rowIndex: number;
  action?: 'download' | 'delete';
  modalRef: React.RefObject<HTMLDivElement>;
  data: TableAccountsData[] | TableDiagnosisData[] | TableAnimalsData[];
}

export const renderCell = (
  col: Column,
  item: TableAccountsData | TableDiagnosisData | TableAnimalsData,
): React.ReactNode => {
  if (col.render) {
    return col.render(item);
  }

  return item[col.accessor as keyof typeof item];
};

export const SelectableCell: React.FC<SelectableCellProps> = ({
  isSelected,
  onSelect,
}) => (
  <TableCell>
    <Checkbox name="select" checked={isSelected} onChange={onSelect} />
  </TableCell>
);

export const ActionCell: React.FC<ActionCellProps> = ({ onActionClick }) => (
  <TableCell>
    <ActionButton onClick={onActionClick}>
      <MoreVertical width={17} height={17} />
    </ActionButton>
  </TableCell>
);

export const getIsSelected = (
  selectedRowsSet: Set<string> | string[],
  itemId: string,
): boolean => {
  if (selectedRowsSet instanceof Set) {
    return selectedRowsSet.has(itemId); // Usando has para Set
  }
  return (selectedRowsSet as string[]).includes(itemId); // Usando includes para Array
};

export const renderActionCell = ({
  action,
  selectMode,
  isSelected,
  toggleSelectRow,
  item,
  rowIndex,
  onAction,
}: RenderActionCellProps) => {
  if (!action) return null;

  return selectMode ? (
    <SelectableCell
      isSelected={isSelected}
      onSelect={() => toggleSelectRow?.(item.id)}
    />
  ) : (
    <ActionCell onActionClick={() => onAction(rowIndex)} />
  );
};

export const renderActionModal = ({
  activeRowIndex,
  rowIndex,
  action,
  modalRef,
  data,
}: RenderActionModalProps) => {
  if (activeRowIndex !== rowIndex) return null;

  return (
    <ActionModal ref={modalRef}>
      <ActionButtons
        action={action}
        onDelete={() => {}}
        activeRowIndex={activeRowIndex}
        data={data}
      />
    </ActionModal>
  );
};
