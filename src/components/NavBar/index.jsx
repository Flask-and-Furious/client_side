import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./navbar.css";
import { Context } from "../../Context";
import Image from "../Image"
import Title from "../Title"

import virus from "../../assets/virus.png"

function NavBar() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);

  return (
    <>
      {storedSessionUser ? (
        // there is a user present
        <nav>
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/language"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Language
          </NavLink>
          <NavLink
            to="/game"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Game
          </NavLink>
          <NavLink
            to="/completed"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Completed
          </NavLink>
          <NavLink
            to="/logout"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Log Out
          </NavLink>
          <NavLink
            to="/difficulty"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Difficulty
          </NavLink>

          <Outlet />
        </nav>
      ) : (
        // there is no user present
        <div className="nav-container2">
          <nav>
            <div className="left2">
              <NavLink to="/">
                <div className="animation">
                  <Image image={virus} altVal="article 1 image goes here" cssClass={"navImg"} />
                </div>
                <div className="nav-title-div">
                  <Title title="Bug Basher" cssClass={"nav-title"} />
                </div>
              </NavLink>
            </div>
            <div className="right2">
              <div className="right-inner-2">
                  <NavLink to="/login">Login</NavLink>
                  <NavLink to="/register">Register</NavLink>
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

// function Navbar() {
//   const [active, setActive] = useState("nav__menu");
//   const [icon, setIcon] = useState("nav__toggler");
//   const navToggle = () => {
//     if (active === "nav__menu") {
//       setActive("nav__menu nav__active");
//     } else setActive("nav__menu");

//     // Icon Toggler
//     if (icon === "nav__toggler") {
//       setIcon("nav__toggler toggle");
//     } else setIcon("nav__toggler");
//   };
//   return (
//     <nav className="nav">
//       <a href="#" className="nav__brand">
//         DEBUGGER
//       </a>
//       <ul className={active}>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Home
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             About
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Contact
//           </a>
//         </li>
//         <li className="nav__item">
//           <a href="#" className="nav__link">
//             Play
//           </a>

//         </li>
//       </ul>
//       <div onClick={navToggle} className={icon}>
//         <div className="line1"></div>
//         <div className="line2"></div>
//         <div className="line3"></div>
//       </div>
//     </nav>
//   );
// }
