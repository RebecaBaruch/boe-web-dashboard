import { RoutesUrls } from "../enums/routes-url";

export const getPageTitle = (pathname: string): string => {
  const titles: Record<string, string> = {
    [RoutesUrls.BASE_URL]: 'Dashboard',
    [RoutesUrls.LINKED_ACCOUNTS]: 'Contas associadas',
    [RoutesUrls.DIAGNOSIS_HISTORIC]: 'Histórico de Análises',
    [RoutesUrls.USER_PROFILE]: 'Meu perfil',
    [RoutesUrls.LOGIN]: 'Login',
    [RoutesUrls.REGISTER]: 'Registro',
    [RoutesUrls.REGISTER_FARM]: 'Registro - Fazenda',
  };
  return titles[pathname] || '';
};