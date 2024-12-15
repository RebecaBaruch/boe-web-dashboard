import React from 'react';

type Size = 30 | 50 | 80 | 100;
type alignText = 'center' | 'left' | 'right';

interface ErrorTitleProps {
  children: React.ReactNode;
  size: Size;
  alignText?: alignText;
}

export default function ErrorTitle({ children, size, alignText }: ErrorTitleProps) {
  return (
    <h1
      style={{
        fontSize: `${size}px`,
        fontWeight: 'bold',
        color: '#282FD9',
        fontFamily: 'Roboto, sans-serif',
        textAlign: alignText,
        margin: 0,
        padding: 0,
      }}
    >
      {children}
    </h1>
  );
}
