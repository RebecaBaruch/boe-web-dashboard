import React from 'react';
import { LoadingContainer } from './styled';
import { LoadingProps } from './types';
import { ThreeDots } from 'react-loader-spinner';

export default function LoadingComponent({ absolute = false }: LoadingProps) {
  return (
    <LoadingContainer absolute={absolute}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#282FD9"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </LoadingContainer>
  );
}
