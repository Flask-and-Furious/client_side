import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./navbar.css";
import { Context } from "../../Context";

function NavBar() {
  const { user, setUser } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    // remove the token and user from the session storage
    localStorage.removeItem("token");
    localStorage.clear();
    setUser("");

    navigateTo("/");
  };
  return (
    <>
      {user ? (
        // there is a user present
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink onClick={handleLogout}>Log Out</NavLink>
          <Outlet />
        </nav>
      ) : (
        // there is no user present
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
          <Outlet />
        </nav>
      )}
    </>
  );
}
export default NavBar;
