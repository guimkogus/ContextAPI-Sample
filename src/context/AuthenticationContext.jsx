import React, { createContext, useState } from 'react';

export const AuthenticationContext = createContext();

const AuthenticationContextProvider = ({ children }) => {
  const [state, setState] = useState({
      isLoggedIn: false
  });

  const toggleAuthStatus = () => {
      setState({...state, isLoggedIn: !state.isLoggedIn})
  }

  return (
      <AuthenticationContext.Provider value={{ ...state, toggleAuthStatus }}>
          {children}
      </AuthenticationContext.Provider>
  )
}

export default AuthenticationContextProvider;
