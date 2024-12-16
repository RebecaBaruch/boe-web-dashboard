import React from 'react';
import Home from '../view/home.view';
import { getGreeting } from 'utils/date-utils';
import { ThemeContextProvider } from '@telefonica/mistica';
import { theme } from '../../../config/theme';
import { useLoginContext } from '../../../context/login-context';

export default function HomeController() {
  const [isLoading, setIsLoading] = React.useState(true);
  const { userData } = useLoginContext();
  const [userName, setUserName] = React.useState('');
  const [greetingText, setGreetingText] = React.useState('');

  React.useEffect(() => {
    if (userData.name) {
      setUserName(userData.name);
      setGreetingText(getGreeting());
      setIsLoading(false);
    }
  }, [userData]);

  return (
    <ThemeContextProvider theme={theme}>
      <Home
        greetingText={greetingText}
        userName={userName}
        isLoading={isLoading}
      />
      ;
    </ThemeContextProvider>
  );
}
