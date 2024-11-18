import { SubNavItemsProps } from '../types';
import { UserIcon, TratorIcon, KeyIcon } from '../nav-icons';
import React from 'react';

export const SubNavItems: SubNavItemsProps[] = [
  {
    label: 'my-profile',
    text: 'Meu perfil',
    icon: (isActive) =>
      React.createElement(UserIcon, {
        color: isActive ? '#ffffff' : '#717171',
        width: 30,
        height: 30,
      }),
  },
  {
    label: 'farm-profile',
    text: 'Dados da fazenda',
    icon: (isActive) =>
      React.createElement(TratorIcon, {
        color: isActive ? '#ffffff' : '#717171',
        width: 30,
        height: 30,
      }),
  },
  {
    label: 'change-password',
    text: 'Alterar senha',
    icon: (isActive) =>
      React.createElement(KeyIcon, {
        color: isActive ? '#ffffff' : '#717171',
        width: 30,
        height: 30,
      }),
  },
];
