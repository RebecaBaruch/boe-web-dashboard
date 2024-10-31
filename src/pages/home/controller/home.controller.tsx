import React from 'react';
import Home from '../view/home.view';
import { getGreeting } from 'utils/date-utils';

export default function HomeController() {
  const [greetingText, setGreetingText] = React.useState('');

  React.useEffect(() => {
    setGreetingText(getGreeting());
  }, []);

  return <Home greetingText={greetingText} userName={'Rebeca'} />;
}
