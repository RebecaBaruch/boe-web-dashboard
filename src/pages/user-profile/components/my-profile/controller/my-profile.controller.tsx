import React from 'react';
import MyProfile from '../view/my-profile.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../../config/theme';
import { mockMyProfileData } from '../mock';

export default function MyProfileController() {
  const [readOnly, setReadOnly] = React.useState<boolean>(true);
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  const mockData = mockMyProfileData;
  const [updateInfo, setUpdateInfo] = React.useState({
    firstName: mockMyProfileData.firstName,
    lastName: mockMyProfileData.lastName,
    email: mockMyProfileData.email,
    phone: mockMyProfileData.phone,
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
      <MyProfile
        firstName={mockData.firstName}
        lastName={mockData.lastName}
        email={mockData.email}
        phone={mockData.phone}
        location={mockData.location}
        isEditMode={isEditMode}
        onEdit={handleEditInfo}
        readOnly={readOnly}
        onUpdate={handleUpdateInfo}
        setUpdateInfo={setUpdateInfo}
        updateInfo={updateInfo}
      />
    </ThemeContextProvider>
  );
}
