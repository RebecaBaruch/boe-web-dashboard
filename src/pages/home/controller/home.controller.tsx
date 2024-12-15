import React from 'react';
import Home from '../view/home.view';
import { getGreeting } from 'utils/date-utils';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { useLoginContext } from '../../../context/login-context';

export default function HomeController() {
  const { userData } = useLoginContext();
  const [userName, setUserName] = React.useState('');
  const [greetingText, setGreetingText] = React.useState('');

  React.useEffect(() => {
    setUserName(userData.name);
    setGreetingText(getGreeting());
  }, [userData]);

  return (
    <ThemeContextProvider theme={theme}>
      <Home greetingText={greetingText} userName={userName} />;
    </ThemeContextProvider>
  );
}
