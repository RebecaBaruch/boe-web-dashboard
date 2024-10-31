import React from 'react';
import { screen, } from '@testing-library/react';
import Home from '../../../../../src/pages/home/view/home.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

const propsMock = {
  greetingText: 'Hello',
  userName: 'Test User',
};

describe('Home', () => {
  it('should render Home with text Home', () => {
    const { container } = renderWithTheme(<Home {...propsMock} />);

    expect(screen.getByText('Hello, Test User')).toBeInTheDocument();
    expect(screen.getByText('Overview')).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
