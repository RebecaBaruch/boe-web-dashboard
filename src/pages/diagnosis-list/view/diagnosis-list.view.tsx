import React from 'react';
import { DiagnosisListProps } from '../types';
import TabButtons from '../components/tab-button/tab-button.component';
import { Wrapper } from '../components/Wrapper/styled';
import DiagnosisView from '../components/diagnosis-table';
import AnimalsView from '../components/animals-table';

export default function DiagnosisList({
  activeTab,
  setActiveTab,
}: DiagnosisListProps) {
  const renderContent = () => {
    switch (activeTab) {
      case 'anality':
        return <DiagnosisView />;
      case 'animals':
        return <AnimalsView />;
    }
  };

  return (
    <Wrapper>
      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
      {renderContent()}
    </Wrapper>
  );
}
