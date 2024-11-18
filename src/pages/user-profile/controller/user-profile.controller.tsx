import React from 'react';
import UserProfile from '../view/user-profile.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';

export default function UserProfileController() {
  const [activeTab, setActiveTab] = React.useState<
    'my-profile' | 'farm-profile' | 'change-password'
  >('my-profile');

  return (
    <ThemeContextProvider theme={theme}>
      <UserProfile activeTab={activeTab} onTabChange={setActiveTab} />
    </ThemeContextProvider>
  );
}
