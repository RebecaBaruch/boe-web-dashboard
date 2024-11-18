import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import FarmProfile from '../../../../../src/pages/user-profile/components/farm-profile/view/farm-profile.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

const mockFarmProfileProps = {
  propertyName: 'Farm Example',
  farmPhone: '1234567890',
  cep: '12345-678',
  cnpj: '12345678000195',
  location: 'Example City',
  address: 'Example Street, 123',
  onEdit: jest.fn(),
  isEditMode: false,
  readOnly: false,
  onUpdate: jest.fn(),
  updateInfo: {
    propertyName: '',
    farmPhone: '',
    cep: '',
    cnpj: '',
    location: '',
    address: '',
  },
  setUpdateInfo: jest.fn(),
};

describe('FarmProfile Component', () => {
  it('should render the property name and location', () => {
    renderWithTheme(<FarmProfile {...mockFarmProfileProps} />);

    expect(screen.getByText(/Farm Example/i)).toBeInTheDocument();
    expect(screen.getByText(/Example City/i)).toBeInTheDocument();
  });

  it('should call onEdit function when the Edit button is clicked', () => {
    renderWithTheme(<FarmProfile {...mockFarmProfileProps} />);

    const editButton = screen.getByRole('button', { name: /Editar/i });
    fireEvent.click(editButton);

    expect(mockFarmProfileProps.onEdit).toHaveBeenCalledTimes(1);
  });

  it('should display Save and Cancel buttons when in edit mode', () => {
    renderWithTheme(
      <FarmProfile {...{ ...mockFarmProfileProps, isEditMode: true }} />,
    );

    expect(
      screen.getByRole('button', { name: /Salvar alteração/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Cancelar/i }),
    ).toBeInTheDocument();
  });

  it('should not display Save and Cancel buttons when not in edit mode', () => {
    renderWithTheme(<FarmProfile {...mockFarmProfileProps} />);

    expect(
      screen.queryByRole('button', { name: /Salvar alteração/i }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: /Cancelar/i }),
    ).not.toBeInTheDocument();
  });

  it('should call setUpdateInfo when an input value changes', () => {
    renderWithTheme(<FarmProfile {...mockFarmProfileProps} />);

    const inputPropertyName = screen.getByPlaceholderText('Farm Example');
    fireEvent.change(inputPropertyName, { target: { value: 'New Farm' } });

    expect(mockFarmProfileProps.setUpdateInfo).toHaveBeenCalledTimes(1);
  });

  it('should allow editing inputs if readOnly is false', () => {
    renderWithTheme(<FarmProfile {...mockFarmProfileProps} />);

    const inputs = screen.getAllByRole('textbox');
    inputs.forEach((input) => expect(input).not.toBeDisabled());
  });
});
