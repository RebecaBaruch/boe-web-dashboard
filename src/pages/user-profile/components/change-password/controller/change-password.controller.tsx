import React from 'react';
import ChangePassword from '../view/change-password.view';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../../../config/theme';

export default function ChangePasswordController() {
  const [currentPassword, setCurrentPassword] = React.useState('senha123');
  const [confirmCurrentPassword, setConfirmCurrentPassword] =
    React.useState('');
  const [newPassword, setNewPassword] = React.useState('');
  const [confirmNewPassword, setConfirmNewPassword] = React.useState('');
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isSaveEnabled, setIsSaveEnabled] = React.useState(false);

  React.useEffect(() => {
    setIsEditMode(confirmCurrentPassword === currentPassword);
  }, [confirmCurrentPassword, currentPassword, isEditMode]);

  React.useEffect(() => {
    setIsSaveEnabled(newPassword === confirmNewPassword && newPassword !== '');
  }, []);

  const handleSave = () => {
    setCurrentPassword(newPassword);
    setNewPassword('');
    setConfirmNewPassword('');
    setConfirmCurrentPassword('');
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setConfirmCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
    setIsEditMode(false);
  };

  return (
    <ThemeContextProvider theme={theme}>
      <ChangePassword
        currentPassword={currentPassword}
        confirmCurrentPassword={confirmCurrentPassword}
        newPassword={newPassword}
        confirmNewPassword={confirmNewPassword}
        isEditMode={isEditMode}
        readOnly={!isEditMode}
        onEdit={handleCancel}
        onUpdate={handleSave}
        setUpdateInfo={{
          setConfirmCurrentPassword,
          setNewPassword,
          setConfirmNewPassword,
        }}
        isPasswordValid={isSaveEnabled}
      />
    </ThemeContextProvider>
  );
}
