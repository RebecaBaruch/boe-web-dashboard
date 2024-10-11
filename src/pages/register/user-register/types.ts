export interface UserFormProps {
  userName: string;
  email: string;
  phone: string;
  password: string;
  error: boolean;
  disabled: boolean;
  onContinueButton: () => void;
  onCancelButton: () => void;
}
