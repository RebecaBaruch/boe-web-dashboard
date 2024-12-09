import React from 'react';
import {
  ProfileContainer,
  ProfileContent,
  ProfileNavButton,
  ProfileNavigatorContainer,
} from './styled';
import { ProfileNavigatorProps } from './types';
import { SubNavItems } from './constant/navItems';

const ProfileNavigator = ({
  children,
  activeTab,
  onTabChange,
}: ProfileNavigatorProps) => {
  return (
    <ProfileContainer>
      <ProfileNavigatorContainer>
        {SubNavItems.map((item) => {
          const isActive = activeTab === item.label;

          return (
            <ProfileNavButton
              key={item.label}
              active={isActive}
              onClick={() => onTabChange(item.label)}
            >
              {item.icon(isActive)}
              {item.text}
            </ProfileNavButton>
          );
        })}
      </ProfileNavigatorContainer>

      <ProfileContent>{children}</ProfileContent>
    </ProfileContainer>
  );
};

export default ProfileNavigator;
