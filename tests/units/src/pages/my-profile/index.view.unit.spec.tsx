import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import MyProfile from '../../../../../src/pages/user-profile/components/my-profile/view/my-profile.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('MyProfile Component', () => {
  const mockOnEdit = jest.fn();
  const mockOnUpdate = jest.fn();
  const mockSetUpdateInfo = jest.fn();

  const defaultProps = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    location: 'City, Country',
    readOnly: false,
    isEditMode: false,
    onEdit: mockOnEdit,
    onUpdate: mockOnUpdate,
    updateInfo: { firstName: '', lastName: '', email: '', phone: '' },
    setUpdateInfo: mockSetUpdateInfo,
  };

  it('should render MyProfile with initial data', () => {
    renderWithTheme(<MyProfile {...defaultProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Administrador do Sistema')).toBeInTheDocument();
    expect(screen.getByText('City, Country')).toBeInTheDocument();
    expect(screen.getByText('E-mail')).toBeInTheDocument();
    expect(screen.getByText('Telefone')).toBeInTheDocument();
  });

  it('should call onEdit when the "Editar" button is clicked', () => {
    renderWithTheme(<MyProfile {...defaultProps} />);

    const editButton = screen.getByText('Editar');
    fireEvent.click(editButton);

    expect(mockOnEdit).toHaveBeenCalledTimes(1);
  });

  it('should render the "Cancelar" and "Salvar alteração" buttons in edit mode', () => {
    renderWithTheme(<MyProfile {...defaultProps} isEditMode={true} />);

    expect(screen.getByText('Cancelar')).toBeInTheDocument();
    expect(screen.getByText('Salvar alteração')).toBeInTheDocument();
  });

  it('should call onUpdate when the "Salvar alteração" button is clicked', () => {
    renderWithTheme(<MyProfile {...defaultProps} isEditMode={true} />);

    const saveButton = screen.getByText('Salvar alteração');
    fireEvent.click(saveButton);

    expect(mockOnUpdate).toHaveBeenCalledTimes(1);
  });

  it('should update input fields when user types', () => {
    const mockSetUpdateInfo = jest.fn();
    const updateInfo = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '123-456-7890',
    };

    renderWithTheme(
      <MyProfile
        firstName="John"
        lastName="Doe"
        email="john@example.com"
        phone="123-456-7890"
        location="New York"
        isEditMode={true}
        onEdit={() => {}}
        readOnly={false}
        onUpdate={() => {}}
        setUpdateInfo={mockSetUpdateInfo}
        updateInfo={updateInfo}
      />,
    );

    fireEvent.change(screen.getByPlaceholderText('John'), {
      target: { value: 'Jane' },
    });

    expect(mockSetUpdateInfo).toHaveBeenCalled();
  });
});
