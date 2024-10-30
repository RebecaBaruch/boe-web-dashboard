import React from 'react';
import { RoutesUrls } from 'utils/enums/routes-url';
import HomeIcon from '../nav-icons/home';
import AccountsIcon from '../nav-icons/accounts';
import CowIcon from '../nav-icons/cow';
import UserIcon from '../nav-icons/profile';

type NavItem = {
  label: string;
  path: string;
  icon: (isActive: boolean) => React.ReactNode;
};

export const navItems: NavItem[] = [
  {
    label: 'Dashboard',
    path: RoutesUrls.BASE_URL,
    icon: (isActive) =>
      React.createElement(HomeIcon, {
        color: isActive ? '#ffffff' : '#636075',
      }),
  },
  {
    label: 'Accounts list',
    path: RoutesUrls.LINKED_ACCOUNTS,
    icon: (isActive) =>
      React.createElement(AccountsIcon, {
        color: isActive ? '#ffffff' : '#636075',
      }),
  },
  {
    label: 'Diagnosis historic',
    path: RoutesUrls.DIAGNOSIS_HISTORIC,
    icon: (isActive) =>
      React.createElement(CowIcon, {
        color: isActive ? '#ffffff' : '#636075',
      }),
  },
  {
    label: 'Meu perfil',
    path: RoutesUrls.USER_PROFILE,
    icon: (isActive) =>
      React.createElement(UserIcon, {
        color: isActive ? '#ffffff' : '#636075',
      }),
  },
];
