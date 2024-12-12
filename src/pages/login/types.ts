export interface LoginProps {
  email: string;
  password: string;
  isButtonDisabled: boolean;
  onLogin: () => void;
  isLoading?: boolean;
  onRegister: () => void;
  onEmailChange: React.Dispatch<React.SetStateAction<string>>;
  onPasswordChange: React.Dispatch<React.SetStateAction<string>>;
}
