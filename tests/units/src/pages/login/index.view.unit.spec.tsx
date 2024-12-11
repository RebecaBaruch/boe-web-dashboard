import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import Login from '../../../../../src/pages/login/view/login.view';

describe('Login', () => {
  it('should render the login form correctly', () => {
    renderWithTheme(<Login />);

    const title = screen.getByText(/Log in/i);
    expect(title).toBeInTheDocument();

    const description = screen.getByText(
      /Bem vindo de volta! Monitore da melhor forma a saúde do seu gado!/i,
    );
    expect(description).toBeInTheDocument();

    const enterWithGoogle = screen.getByText(/Entre com Google/i);
    expect(enterWithGoogle).toBeInTheDocument();

    const enterWithEmailText = screen.getByText(/Ou entre com o e-mail/i);
    expect(enterWithEmailText).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText(/Insira seu e-mail/i);
    expect(emailInput).toBeInTheDocument();

    const passwordInput = screen.getByPlaceholderText(/Digite a sua senha/i);
    expect(passwordInput).toBeInTheDocument();

    const rightTitle = screen.getByText(/O melhor para a saúde do seu gado/i);
    expect(rightTitle).toBeInTheDocument();

    const rightText = screen.getByText(
      /Registre as análises da saúde dermatológica do seu gado e monitore todos os processos através do dashboard web./i,
    );
    expect(rightText).toBeInTheDocument();
  });
});
