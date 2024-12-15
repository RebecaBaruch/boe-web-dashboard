import React from 'react';

export default function ErrorWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '40px',
        width: '100vw',
        height: '100vh',
      }}
    >
      {children}
    </div>
  );
}
