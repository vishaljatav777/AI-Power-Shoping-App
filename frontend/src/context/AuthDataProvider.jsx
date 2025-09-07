/* eslint-disable react-refresh/only-export-components */
import React, { createContext } from "react";

export const AuthDataContext = createContext();

function AuthDataProvider({ children }) {
  const serverUrl = "http://localhost:8000";
  const value = { serverUrl };

  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  );
}

export default AuthDataProvider;
// eslint-enable react-refresh/only-export-components
