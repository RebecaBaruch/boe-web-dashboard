export interface ChangePasswordProps {
  currentPassword: string;
  confirmCurrentPassword: string;
  newPassword: string;
  confirmNewPassword: string;

  isPasswordValid: boolean;
  isEditMode: boolean;
  onEdit: () => void;
  readOnly: boolean;
  onUpdate: () => void;
  setUpdateInfo: {
    setConfirmCurrentPassword: (value: string) => void;
    setNewPassword: (value: string) => void;
    setConfirmNewPassword: (value: string) => void;
  };
}
