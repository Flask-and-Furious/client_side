import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("");
  const [storedSessionUser, setStoredSessionUser] = useState(""); // needs to come from SQL database
  // const [storedFullUserDetails, setStoredFullUserDetails] = useState(""); // needs to come from SQL database
  const [isValidUser, setIsValidUser] = useState(true);

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
