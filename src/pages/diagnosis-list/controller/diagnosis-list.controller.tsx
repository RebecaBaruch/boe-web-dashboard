import React from 'react';
import DiagnosisList from '../view/diagnosis-list.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';

export default function DiagnosisListController() {
  const [activeTab, setActiveTab] = React.useState<'anality' | 'animals'>(
    'anality',
  );

  const handleToggleTab = React.useCallback(() => {
    setActiveTab(activeTab === 'anality' ? 'animals' : 'anality');
  }, [activeTab]);

  return (
    <ThemeContextProvider theme={theme}>
      <DiagnosisList activeTab={activeTab} setActiveTab={handleToggleTab} />
    </ThemeContextProvider>
  );
}
