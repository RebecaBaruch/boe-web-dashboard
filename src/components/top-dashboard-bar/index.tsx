import React from 'react';
import { Bar, DataContainer } from './styled';
import {
  getCurrentDate,
  getCurrentDayOfWeek,
  getCurrentTime,
} from 'utils/date-utils';
import { Row } from 'components/row/styled';
import { Text2 } from '@telefonica/mistica';
import { Calendar, Clock } from 'react-feather';

const TopDashboardBar = () => {
  const [currentTime, setCurrentTime] = React.useState('');

  React.useEffect(() => {
    setCurrentTime(getCurrentTime());

    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Bar>
      <Row space={3}>
        <Text2 medium>{getCurrentDayOfWeek()}</Text2>
        <DataContainer>
          <Calendar width={18} />
          {getCurrentDate()}
        </DataContainer>
        <DataContainer>
          <Clock width={18} />
          {currentTime}
        </DataContainer>
      </Row>
    </Bar>
  );
};

export default TopDashboardBar;
