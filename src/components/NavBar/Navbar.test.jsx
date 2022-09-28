/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from ".";

// describe("Running NavBar component", () => {
//   test("Ensures it renders without crashing", () => {
//     const user = "testUser";

//     if (user) {
//       render(
//         <BrowserRouter>
//           <NavBar />
//         </BrowserRouter>
//       );
//     }
//   });
// });

// describe("navbar component ", () => {
//   it("renders navbar ", () => {
//     const myNav = "";

//     render(<NavBar label={myNav} user={"test"}/>);
//   });
// });
