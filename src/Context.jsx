import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("");
  const [storedSessionUser, setStoredSessionUser] = useState("");
  const [isValidUser, setIsValidUser] = useState(false);

  return (
    <Context.Provider
      value={{
        codeLanguage,
        setCodeLanguage,
        storedSessionUser,
        setStoredSessionUser,
        isValidUser,
        setIsValidUser,
      }}
    >
      {children}
    </Context.Provider>
  );
};
