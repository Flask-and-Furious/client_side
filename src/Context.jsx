import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("python");
  const [storedSessionUser, setStoredSessionUser] = useState("");
  const [isValidLogIn, setIsValidLogIn] = useState(true);

  return (
    <Context.Provider
      value={{
        codeLanguage,
        setCodeLanguage,
        storedSessionUser,
        setStoredSessionUser,
        isValidLogIn,
        setIsValidLogIn,
      }}
    >
      {children}
    </Context.Provider>
  );
};
