import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./navbar.css";
import { Context } from "../../Context";
import Image from "../Image";
import Title from "../Title";

import virus from "../../assets/virus.png";

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
        <div className="nav-container2">
          <nav role={"nav"}>
            <div className="left2">
              <NavLink to="/" role={"home"}>
                <div className="animation">
                  <Image
                    image={virus}
                    altVal="article 1 image goes here"
                    cssClass={"navImg"}
                  />
                </div>
                <div className="nav-title-div">
                  <Title title="Bug Basher" cssClass={"nav-title"} />
                </div>
              </NavLink>
            </div>
            <div className="right2">
              <div className="right-inner-2">
                <NavLink to="/dashboard" role={"dashboard"}>
                  Dashboard
                </NavLink>
                <NavLink onClick={handleLogout} role={"logout"}>
                  Log out
                </NavLink>
                <Outlet />
              </div>
            </div>
          </nav>
        </div>
      ) : (
        // there is no user present
        <div className="nav-container2">
          <nav role={"nav"}>
            <div className="left2">
              <NavLink to="/" role={"home"}>
                <div className="animation">
                  <Image
                    image={virus}
                    altVal="article 1 image goes here"
                    cssClass={"navImg"}
                  />
                </div>
                <div className="nav-title-div">
                  <Title title="Bug Basher" cssClass={"nav-title"} />
                </div>
              </NavLink>
            </div>
            <div className="right2">
              <div className="right-inner-2">
                <NavLink to="/login" role={"login"}>
                  Login
                </NavLink>
                <NavLink to="/register" role={"register"}>
                  Register
                </NavLink>
                <Outlet />
              </div>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
export default NavBar;
