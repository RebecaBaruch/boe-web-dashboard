export interface SubNavItemsProps {
  active?: boolean;
  label: string;
  icon: (isActive: boolean) => React.ReactNode;
  text: string
}

export interface ProfileNavigatorProps {
    children: React.ReactNode
    activeTab: string;
    onTabChange: (tab: string) => void;
}