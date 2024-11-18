import React from 'react';
import FarmProfile from '../view/farm-profile.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../../config/theme';
import { mockFarmData } from '../mock';

export default function FarmProfileController() {
  const [readOnly, setReadOnly] = React.useState<boolean>(true);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const mockData = mockFarmData;
  const [updateInfo, setUpdateInfo] = React.useState({
    propertyName: mockFarmData.propertyName,
    farmPhone: mockFarmData.farmPhone,
    cep: mockFarmData.cep,
    cnpj: mockFarmData.cnpj,
    location: mockFarmData.location,
    address: mockFarmData.address
  });

  const handleEditInfo = React.useCallback(() => {
    setReadOnly((prev) => !prev);
    setIsEditMode((prev) => !prev);
  }, []);

  const handleUpdateInfo = React.useCallback(() => {
    console.log('Update info');
    handleEditInfo();
  }, []);

  return (
    <ThemeContextProvider theme={theme}>
      <FarmProfile
        propertyName={mockData.propertyName}
        farmPhone={mockData.farmPhone}
        cep={mockData.cep}
        cnpj={mockData.cep}
        location={mockData.location}
        address={mockData.address}
        isEditMode={isEditMode}
        onEdit={handleEditInfo}
        readOnly={readOnly}
        onUpdate={handleUpdateInfo}
        updateInfo={updateInfo}
        setUpdateInfo={setUpdateInfo}
      />
    </ThemeContextProvider>
  );
}
