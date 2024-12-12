import React, { ReactNode, useState } from 'react';

interface LoginDataProps {
  name: string;
  email: string;
  jwt: string;
}

interface LoginContextProps extends LoginDataProps {
  setLoginData: (data: LoginDataProps) => void;
}

export const LoginContext = React.createContext<LoginContextProps>({
  name: '',
  email: '',
  jwt: '',
  setLoginData: () => {},
});

export const LoginContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loginData, setLoginData] = useState<LoginDataProps>({
    name: '',
    email: '',
    jwt: '',
  });

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setLoginData({
        name: '',
        email: '',
        jwt,
      });
    }
  }, []);

  return (
    <LoginContext.Provider value={{ ...loginData, setLoginData }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => {
  const context = React.useContext(LoginContext);
  if (!context) {
    throw new Error('LoginContext must be used within a LoginContextProvider');
  }
  return context;
};
