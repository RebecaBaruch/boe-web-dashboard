export interface UserProfileProps {
  activeTab: 'my-profile' | 'farm-profile' | 'change-password';
  onTabChange: (tab: 'my-profile' | 'farm-profile' | 'change-password') => void;
}
