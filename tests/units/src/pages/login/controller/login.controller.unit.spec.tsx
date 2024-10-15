import React from 'react';
import Login from '../../../../../../src/pages/login/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('Login', () => {
  it('should render Login', async () => {
    const { container } = await renderWithTheme(<Login />);

    expect(container).toMatchSnapshot();
  });
});
