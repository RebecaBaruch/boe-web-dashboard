import React from 'react';
import FarmProfile from '../../../../../../src/pages/user-profile/components/farm-profile/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('FarmProfile', () => {
  it('should render FarmProfile', () => {
    const { container } = renderWithTheme(<FarmProfile />);

    expect(container).toMatchSnapshot();
  });
});
