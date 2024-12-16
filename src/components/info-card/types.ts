export interface InfoCardProps {
    type: 'info' | 'warning' | 'error' | 'empty-state';
    empty?: 'accounts' | 'animals';
    title: string;
    description: string;
    action?: string;
    onClick?: () => void;
    border?: boolean;
}