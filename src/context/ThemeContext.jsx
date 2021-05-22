import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [state, setState] = useState({
      isDarkTheme: true,
      lightTheme: {
          color: '#222',
          backgroundColor: '#d8ddf1',
      },
      darkTheme: {
          color: '#fff',
          backgroundColor: '#5c5c5c',
      }
  });

  const toggleIsDarkTheme = () => {
      setState({
          ...state,
          isDarkTheme: !state.isDarkTheme
      })
  }

  return (
      <ThemeContext.Provider value={{ ...state, toggleIsDarkTheme}}>
          {children}
      </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
