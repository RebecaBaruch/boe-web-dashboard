import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import UserProfile from '../../../../../src/pages/user-profile/view/user-profile.view';
import { renderWithTheme } from '../../../../../src/utils/render-with-theme';

jest.mock('../../../../../src/pages/user-profile/components/my-profile', () => {
  const MyProfile = () => <div>My Profile Component</div>;
  MyProfile.displayName = 'MyProfile';
  return MyProfile;
});

jest.mock(
  '../../../../../src/pages/user-profile/components/farm-profile',
  () => {
    const FarmProfile = () => <div>Farm Profile Component</div>;
    FarmProfile.displayName = 'FarmProfile';
    return FarmProfile;
  },
);

jest.mock(
  '../../../../../src/pages/user-profile/components/change-password',
  () => {
    const ChangePassword = () => <div>Change Password Component</div>;
    ChangePassword.displayName = 'ChangePassword';
    return ChangePassword;
  },
);

describe('UserProfile', () => {
  const onTabChangeMock = jest.fn();

  const renderComponent = (
    activeTab: 'my-profile' | 'farm-profile' | 'change-password',
  ) => {
    renderWithTheme(
      <UserProfile activeTab={activeTab} onTabChange={onTabChangeMock} />,
    );
  };

  it('should render MyProfile by default', () => {
    renderComponent('my-profile');
    expect(screen.getByText('My Profile Component')).toBeInTheDocument();
  });

  it('should render FarmProfile when farm-profile tab is active', () => {
    renderComponent('farm-profile');
    expect(screen.getByText('Farm Profile Component')).toBeInTheDocument();
  });

  it('should render ChangePassword when change-password tab is active', () => {
    renderComponent('change-password');
    expect(screen.getByText('Change Password Component')).toBeInTheDocument();
  });

  it('should call onTabChange when a tab is clicked', () => {
    renderComponent('my-profile');

    const myProfileButton = screen.getByRole('button', { name: 'Meu perfil' });
    const farmProfileButton = screen.getByRole('button', {
      name: 'Dados da fazenda',
    });

    expect(myProfileButton).toBeInTheDocument();
    fireEvent.click(farmProfileButton);

    expect(onTabChangeMock).toHaveBeenCalled();
  });
});
