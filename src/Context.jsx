import React, { useState ,createContext, useContext} from "react";

export const Context = React.createContext();
const UserContext = createContext();

export const ContextProvider = ({ children }) => {
  const [codeLanguage, setCodeLanguage] = useState("python");
  const [storedSessionUser, setStoredSessionUser] = useState("");
  const [isValidUser, setIsValidUser] = useState(true);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(0);
  const [minTime, setMinTime] = useState(Infinity);
  const [maxTime, setMaxTime] = useState(-Infinity);
  return (
    <Context.Provider
      value={{
        codeLanguage,
        setCodeLanguage,
        storedSessionUser,
        setStoredSessionUser,
        isValidUser,
        setIsValidUser,
        user,setUser,score,setScore,
        minTime, setMinTime,
        maxTime, setMaxTime
      }}
    >
      {children}
    </Context.Provider>
  );
};



export function useUserContext() {
  return useContext(UserContext);
}
