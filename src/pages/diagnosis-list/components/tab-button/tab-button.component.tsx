import React from 'react';
import { TabButtonsProps } from './types';
import { TabButton, TabContainer } from './styled';

export default function TabButtons({
  activeTab,
  onTabChange,
}: TabButtonsProps) {
  return (
    <TabContainer>
      <TabButton
        active={activeTab === 'anality'}
        onClick={() => onTabChange('anality')}
      >
        Registro de análises
      </TabButton>
      <TabButton
        active={activeTab === 'animals'}
        onClick={() => onTabChange('animals')}
      >
        Animais registrados
      </TabButton>
    </TabContainer>
  );
}
