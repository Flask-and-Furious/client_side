/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Register from ".";
import { ContextProvider } from "../../Context";

describe("Running Register component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Register />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("register Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Register />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  it("Renders a title", () => {
    const title = screen.queryByRole("heading");
    expect(title).toBeInTheDocument();
  });

  it("Renders all inputs for registering", () => {
    const input = screen.getAllByRole("input");

    input.map((single) => {
      expect(single).toBeInTheDocument();
      expect(typeof single.textContent).toBe("string");
      expect(single).toBeTruthy();
    });
  });
});
