import React from 'react';
import FarmRegister from '../../../../../../src/pages/register/farm-register/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('FarmRegister', () => {
  it('should render FarmRegister', () => {
    const { container } = renderWithTheme(<FarmRegister />);

    expect(container).toMatchSnapshot();
  });
});
