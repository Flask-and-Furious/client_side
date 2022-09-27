import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

import { Context } from "../Context";

const PrivateRoutes = () => {
  const { isValidLogIn, setIsValidLogIn } = useContext(Context);
  const auth = { token: isValidLogIn };

  return (
    <>
      <div>{auth.token ? <Outlet /> : <Navigate to={"/login"} />}</div>
    </>
  );
};

export default PrivateRoutes;
