import React from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

const HomeIcon: React.FC<IconProps> = ({
  color = '#636075',
  width = 33,
  height = 34,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 12.875L16.375 3.25L28.75 12.875V28C28.75 28.7293 28.4603 29.4288 27.9445 29.9445C27.4288 30.4603 26.7293 30.75 26 30.75H6.75C6.02065 30.75 5.32118 30.4603 4.80546 29.9445C4.28973 29.4288 4 28.7293 4 28V12.875Z"
      stroke={color}
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 30V20H21V30"
      stroke={color}
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default HomeIcon;
