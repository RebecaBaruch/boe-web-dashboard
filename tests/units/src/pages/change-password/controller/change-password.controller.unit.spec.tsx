import React from 'react';
import ChangePassword from '../../../../../../src/pages/user-profile/components/change-password/index';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

describe('ChangePassword', () => {
  it('should render ChangePassword', () => {
    const { container } = renderWithTheme(<ChangePassword />);

    expect(container).toMatchSnapshot();
  });
});
