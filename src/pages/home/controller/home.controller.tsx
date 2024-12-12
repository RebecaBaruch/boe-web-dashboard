import React from 'react';
import Home from '../view/home.view';
import { getGreeting } from 'utils/date-utils';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';

export default function HomeController() {
  const [greetingText, setGreetingText] = React.useState('');

  React.useEffect(() => {
    setGreetingText(getGreeting());
  }, []);

  return (
    <ThemeContextProvider theme={theme}>
      <Home greetingText={greetingText} userName={'Rebeca'} />;
    </ThemeContextProvider>
  );
}
