import React from 'react';
import ProfileNavigator from '../components/profile-navigator/index.component';
import { UserProfileProps } from '../types';
import MyProfile from '../components/my-profile';
import FarmProfile from '../components/farm-profile';
import ChangePassword from '../components/change-password';

export default function UserProfile({
  activeTab,
  onTabChange,
}: UserProfileProps) {
  const contentRender = () => {
    switch (activeTab) {
      case 'my-profile':
        return <MyProfile />;
      case 'farm-profile':
        return <FarmProfile />;
      case 'change-password':
        return <ChangePassword />;
      default:
        return <MyProfile />;
    }
  };
  return (
    <ProfileNavigator activeTab={activeTab} onTabChange={onTabChange}>
      {contentRender()}
    </ProfileNavigator>
  );
}
