/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import NavBar from ".";
import { ContextProvider } from "../../Context";

describe("Running NavBar component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("NavBar component", () => {
  beforeEach(() => {
    const myNav = "";

    render(
      <BrowserRouter>
        <ContextProvider>
          <NavBar label={myNav} />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  it("Renders a nav bar", () => {
    const nav = screen.queryByRole("nav");
    expect(nav).toBeInTheDocument();
  });
});
