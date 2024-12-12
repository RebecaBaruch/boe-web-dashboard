export interface FarmRegisterProps {
  propertyName: string;
  propertyPhone: string;
  taxId: string;
  zipCode: string;
  state: string;
  city: string;
  address: string;
  onRegister: () => void;
}
