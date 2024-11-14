import React from 'react';
import { screen } from '@testing-library/react';
import FarmRegister from '../../../../../src/pages/register/farm-register/view/farm-register.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('FarmRegister Component', () => {
  beforeEach(() => {
    renderWithTheme(<FarmRegister />);
  });

  it('should render the farm registration form with fields and buttons', () => {
    expect(screen.getByText('Nome da propriedade')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Insira o nome da fazenda'),
    ).toBeInTheDocument();

    expect(screen.getByText('Telefone (fazenda)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('(00) 00000-0000')).toBeInTheDocument();

    expect(screen.getByText('CNPJ')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('0.000.000/0000-00'),
    ).toBeInTheDocument();

    expect(screen.getByText('CEP')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('00000-000')).toBeInTheDocument();

    expect(screen.getByText('Estado')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('UF')).toBeInTheDocument();

    expect(screen.getByText('Cidade')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Localidade')).toBeInTheDocument();

    expect(screen.getByText('Endereço')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Bairro, Rua, nº')).toBeInTheDocument();

    expect(screen.getByText('Concluir registro')).toBeInTheDocument();
    expect(screen.getByText('Voltar')).toBeInTheDocument();
  });

  it('should render the farm data section header correctly', () => {
    expect(screen.getByText('Dados da fazenda')).toBeInTheDocument();
  });
});
