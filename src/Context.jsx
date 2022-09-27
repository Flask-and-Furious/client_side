import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("python");
  const [storedSessionUser, setStoredSessionUser] = useState("");
  const [isValidLogIn, setIsValidLogIn] = useState(true);
  const [isLoggedOut, setIsLoggedOut] = useState(true);
  const [submitForm, setSubmitForm] = useState(false);

  return (
    <Context.Provider
      value={{
        codeLanguage,
        setCodeLanguage,
        storedSessionUser,
        setStoredSessionUser,
        isValidLogIn,
        setIsValidLogIn,
        isLoggedOut,
        setIsLoggedOut,
        submitForm,
        setSubmitForm,
      }}
    >
      {children}
    </Context.Provider>
  );
};
