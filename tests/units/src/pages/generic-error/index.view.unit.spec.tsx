import React from 'react';
import { screen } from '@testing-library/react';
import GenericError from '../../../../../src/pages/error/generic-error/view/generic-error.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

describe('GenericError', () => {
  it('should render GenericError with text GenericError', () => {
    const { container } = renderWithTheme(<GenericError onBack={jest.fn()} />);

    expect(
      screen.getByText('Opa, parece que algo deu errado...'),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Se o problema persistir, por favor tente novamente mais tarde!',
      ),
    ).toBeInTheDocument();
    expect(screen.getByText('Voltar')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
