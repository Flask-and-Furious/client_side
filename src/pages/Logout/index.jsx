import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function Logout() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const { isValidLogIn, setIsValidLogIn } = useContext(Context);
  const { isLoggedOut, setIsLoggedOut } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    setIsValidLogIn(false);
    setIsLoggedOut(true)
    setStoredSessionUser(localStorage.clear());

    console.log("storedSessionUser (logout) ==> ", storedSessionUser);
    console.log("isValidLogIn (logout)  ==> ", isValidLogIn);
    console.log("isLoggedOut (logout) ==> ", isLoggedOut);
  };

  const prevPage = () => {
    return navigate(-1);
  };

  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Are you sure you want to log out?" />
        <button onClick={prevPage}>No</button>
        <button onClick={logOut}>Yes</button>
      </div>
    </>
  );
}

export default Logout;
