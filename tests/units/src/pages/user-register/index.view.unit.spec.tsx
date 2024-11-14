import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import UserRegister from '../../../../../src/pages/register/user-register/view/user-register.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('UserRegister', () => {
  beforeEach(() => {
    renderWithTheme(<UserRegister />);
  });

  it('should render the logo correctly', () => {
    const logo = screen.getByAltText('boe-logo');
    expect(logo).toBeInTheDocument();
  });

  it('should render the registration form with fields and buttons', () => {
    expect(screen.getByPlaceholderText('Insira seu nome')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('seu.email@email.com'),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('(00) 00000-0000')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Crie a sua senha')).toBeInTheDocument();
    expect(screen.getByText('Continuar')).toBeInTheDocument();
    expect(screen.getByText('Cancelar')).toBeInTheDocument();
  });

  it('should call the onChange handler for input fields', () => {
    fireEvent.change(screen.getByPlaceholderText('Insira seu nome'), {
      target: { value: 'John Doe' },
    });

    fireEvent.change(screen.getByPlaceholderText('seu.email@email.com'), {
      target: { value: 'john@example.com' },
    });

    fireEvent.change(screen.getByPlaceholderText('(00) 00000-0000'), {
      target: { value: '(11) 98765-4321' },
    });

    fireEvent.change(screen.getByPlaceholderText('Crie a sua senha'), {
      target: { value: 'password123' },
    });
  });

  it('should render the login link', () => {
    expect(screen.getByText('Log in')).toBeInTheDocument();
  });
});
