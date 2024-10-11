import React from 'react';
import { screen } from '@testing-library/react';
import UserRegister from '../../../../../src/pages/register/user-register/view/user-register.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('UserRegister', () => {
  it('should render UserRegister with text UserRegister', () => {
    const { container } = renderWithTheme(<UserRegister />);

    expect(screen.getByText('Crie a sua conta')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
