import { Outlet, Navigate } from "react-router-dom";
import React, { useContext } from "react";

import { Context } from "../Context";

const PrivateRoutes = () => {
  const { isValidUser, setIsValidUser } = useContext(Context);
  const auth = { "token": isValidUser };

  return (
    <>
      <div>{auth.token ? <Outlet /> : <Navigate to={"/login"} />}</div>
    </>
  );
};

export default PrivateRoutes;
