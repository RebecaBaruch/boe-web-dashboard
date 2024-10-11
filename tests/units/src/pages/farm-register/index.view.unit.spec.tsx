import React from 'react';
import { screen } from '@testing-library/react';
import FarmRegister from '../../../../../src/pages/register/farm-register/view/farm-register.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('FarmRegister', () => {
  it('should render FarmRegister', () => {
    const { container } = renderWithTheme(<FarmRegister />);

    expect(screen.getByText('Dados da fazenda')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
