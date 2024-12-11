import React from 'react';
import UserProfile from '../../../../../../src/pages/user-profile/index.page';
import { renderWithTheme } from '../../../../../../src/utils/render-with-theme';
import { fireEvent, screen } from '@testing-library/react';

const mockedRouter = {
  push: jest.fn(),
};

jest.mock('next/router', () => ({
  useRouter: () => mockedRouter,
}));

jest.mock(
  '../../../../../../src/pages/user-profile/view/user-profile.view',
  () => ({
    __esModule: true,
    default: ({ activeTab, onTabChange }) => (
      <div>
        <div>{`Current Tab: ${activeTab}`}</div>
        <button onClick={() => onTabChange('my-profile')}>My Profile</button>
        <button onClick={() => onTabChange('farm-profile')}>
          Farm Profile
        </button>
        <button onClick={() => onTabChange('change-password')}>
          Change Password
        </button>
      </div>
    ),
  }),
);

describe('UserProfileController', () => {
  it('should render the UserProfileController with the initial tab', () => {
    renderWithTheme(<UserProfile />);

    expect(screen.getByText('Current Tab: my-profile')).toBeInTheDocument();
  });

  it('should change the tab when a tab button is clicked', () => {
    renderWithTheme(<UserProfile />);

    fireEvent.click(screen.getByText('Farm Profile'));

    expect(screen.getByText('Current Tab: farm-profile')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Change Password'));

    expect(
      screen.getByText('Current Tab: change-password'),
    ).toBeInTheDocument();
  });

  it('should pass the correct onTabChange function to UserProfile', () => {
    renderWithTheme(<UserProfile />);

    const myProfileButton = screen.getByText('My Profile');
    fireEvent.click(myProfileButton);

    expect(screen.getByText('Current Tab: my-profile')).toBeInTheDocument();
  });
});
