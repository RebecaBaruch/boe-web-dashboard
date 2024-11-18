import React from 'react';
import MyProfile from '../../../../../../src/pages/user-profile/components/my-profile';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('MyProfile', () => {
  it('should render MyProfile', () => {
    const { container } = renderWithTheme(<MyProfile />);

    expect(container).toMatchSnapshot();
  });
});
