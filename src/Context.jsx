import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("");
  const [storedUsername, setStoredUsername] = useState("");

  return (
    <Context.Provider value={{ codeLanguage, setCodeLanguage, storedUsername, setStoredUsername }}>
      {children}
    </Context.Provider>
  );
};
