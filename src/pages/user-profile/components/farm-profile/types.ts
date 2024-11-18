export interface FarmProfileProps {
  propertyName: string;
  farmPhone: string;
  cep: string;
  cnpj: string;
  location: string;
  address: string;
  onEdit: () => void;
  isEditMode?: boolean;
  readOnly: boolean;
  onUpdate: () => void;
  updateInfo: {
    propertyName: string;
    farmPhone: string;
    cep: string;
    cnpj: string;
    location: string;
    address: string;
  };
  setUpdateInfo: React.Dispatch<
    React.SetStateAction<{
      propertyName: string;
      farmPhone: string;
      cep: string;
      cnpj: string;
      location: string;
      address: string;
    }>
  >;
}
