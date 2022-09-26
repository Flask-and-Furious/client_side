import React, { useState } from "react";

export const Context = React.createContext();
export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("");

  return (
    <Context.Provider value={{ codeLanguage, setCodeLanguage }}>
      {children}
    </Context.Provider>
  );
};
