import React from 'react';
import { HomeProps } from '../types';
import { Text4 } from '@telefonica/mistica';
import { Wrapper } from '../components/wrapper/styled';
import styles from '../styles.module.css';
import SkeletonComponent from '../../../components/skeleton';

export default function Home({ greetingText, userName, isLoading }: HomeProps) {
  const Loading = () => {
    return <SkeletonComponent repeatSkeleton={1} heightSkeleton={20} />;
  };

  const ContentRender = () => {
    if (isLoading) {
      return <Loading />;
    }

    return <Text4 regular>{greetingText + ', ' + userName}</Text4>;
  };

  return (
    <Wrapper>
      {ContentRender()}
      <iframe
        title="Dashboard - BOE"
        width="100%"
        height="100%"
        className={styles.dashboard}
        sandbox="allow-scripts allow-same-origin"
        src="https://app.powerbi.com/view?r=eyJrIjoiOWE1NDY0NjgtZTVlMS00ZDEzLWJhZWUtZGRmN2QxOTNjMjg5IiwidCI6ImNmNzJlMmJkLTdhMmItNDc4My1iZGViLTM5ZDU3YjA3Zjc2ZiIsImMiOjR9"
        allowFullScreen
      ></iframe>
    </Wrapper>
  );
}
