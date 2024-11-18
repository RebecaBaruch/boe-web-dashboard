import React from 'react';
import { screen } from '@testing-library/react';
import ChangePassword from '../../../../../src/pages/user-profile/components/change-password/view/change-password.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('ChangePassword', () => {
  it('should render ChangePassword with text ChangePassword', () => {
    const { container } = renderWithTheme(<ChangePassword />);

    const changePasswordTitle = screen.getAllByText('Alterar senha');
    expect(changePasswordTitle[0]).toBeInTheDocument();
    expect(changePasswordTitle[1]).toBeInTheDocument();

    expect(screen.getByText('Verifique a senha atual')).toBeInTheDocument();

    expect(screen.getByText('Senha atual')).toBeInTheDocument();
    expect(screen.getByText('Confirme a senha atual')).toBeInTheDocument();

    expect(screen.getByText('Nova senha')).toBeInTheDocument();
    expect(screen.getByText('Confirme a nova senha')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
