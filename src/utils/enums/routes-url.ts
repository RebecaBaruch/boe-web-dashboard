export enum RoutesUrls {
  BASE_URL = '/',
  LOGIN = '/login',
  REGISTER = '/register/user-register',
  REGISTER_FARM = '/register/farm-register',
  DASHBOARD = '/home',
  LINKED_ACCOUNTS = '/linked-accounts-list',
  DIAGNOSIS_HISTORIC = '/diagnosis-list',
  USER_PROFILE = '/user-profile',
}

export type RouteUrl =
  | RoutesUrls.BASE_URL
  | RoutesUrls.LOGIN
  | RoutesUrls.REGISTER
  | RoutesUrls.REGISTER_FARM
  | RoutesUrls.DASHBOARD
  | RoutesUrls.LINKED_ACCOUNTS
  | RoutesUrls.DIAGNOSIS_HISTORIC
  | RoutesUrls.USER_PROFILE;
