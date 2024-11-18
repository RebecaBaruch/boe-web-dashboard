export interface MyProfileProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  readOnly: boolean;
  onEdit: () => void;
  isEditMode?: boolean;
  onUpdate: () => void;
  updateInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  setUpdateInfo: React.Dispatch<
    React.SetStateAction<{
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
    }>
  >;
}
