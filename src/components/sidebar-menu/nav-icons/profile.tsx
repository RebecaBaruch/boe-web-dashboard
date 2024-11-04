import React from 'react';

interface IconProps {
  color?: string;
  width?: number;
  height?: number;
}

const UserIcon: React.FC<IconProps> = ({
  color = '#636075',
  width = 23,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 33 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.5 15.375C19.5376 15.375 22 12.9126 22 9.875C22 6.83743 19.5376 4.375 16.5 4.375C13.4624 4.375 11 6.83743 11 9.875C11 12.9126 13.4624 15.375 16.5 15.375Z"
      stroke={color}
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M27.5 29.625V26.875C27.5 25.4163 26.9205 24.0174 25.8891 22.9859C24.8576 21.9545 23.4587 21.375 22 21.375H11C9.54131 21.375 8.14236 21.9545 7.11091 22.9859C6.07946 24.0174 5.5 25.4163 5.5 26.875V29.625"
      stroke={color}
      strokeWidth="2.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default UserIcon;
