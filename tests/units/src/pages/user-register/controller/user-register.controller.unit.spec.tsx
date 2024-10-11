import React from 'react';
import UserRegister from '../../../../../../src/pages/register/user-register/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('UserRegister', () => {
  it('should render UserRegister', () => {
    const { container } = renderWithTheme(<UserRegister />);

    expect(container).toMatchSnapshot();
  });
});
