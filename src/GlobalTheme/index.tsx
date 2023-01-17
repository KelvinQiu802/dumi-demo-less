import React from 'react';

export interface GlobaleThemeProps {
  isDarkMode: boolean;
  children?: React.ReactNode;
}

export const globalContext = React.createContext<GlobaleThemeProps>({
  isDarkMode: false,
} as GlobaleThemeProps);

const GlobalTheme: React.FC<GlobaleThemeProps> = (props) => {
  const { children } = props;
  return (
    <globalContext.Provider value={props}>{children}</globalContext.Provider>
  );
};

export default GlobalTheme;
