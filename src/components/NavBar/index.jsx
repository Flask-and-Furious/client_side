import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./navbar.css";
import { Context } from "../../Context";

function NavBar() {
  const { storedUsername, setStoredUsername } = useContext(Context);

  return (
    <>
      {storedUsername ? (
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
            to="/login"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/register"
            style={({ isActive }) =>
              isActive
                ? { textDecoration: "underline" }
                : { textDecoration: "none" }
            }
          >
            Register
          </NavLink>

          <Outlet />
        </nav>
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
