import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';
import Login from '../../../../../src/pages/login/index.page';

describe('Login', () => {
  it('should render Login with text Login', () => {
    const { container } = renderWithTheme(<Login />);

    expect(screen.getByText('Log in')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
