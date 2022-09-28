/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Login from ".";
import { ContextProvider } from "../../Context";

describe("Running Login component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Login />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("Login Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Login />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  test("Ensures login title is present for user to read", () => {
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(typeof title.textContent).toBe("string");
    expect(title).toBeTruthy();
  });

  it("Renders all inputs for logging in", () => {
    const input = screen.getAllByRole("input");

    input.map((single) => {
      expect(single).toBeInTheDocument();
      expect(typeof single.textContent).toBe("string");
      expect(single).toBeTruthy();
    });
  });
});
