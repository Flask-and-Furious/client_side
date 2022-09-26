/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Register from ".";

//const testFunc = jest.fn()

describe("register Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });

  it("Renders a title", () => {
    const title = screen.queryByRole("heading");
    expect(title).toBeInTheDocument();
  });

  it("Renders an input for username", () => {
    const input = screen.queryByRole("username");
    expect(input).toBeInTheDocument();
  });

  it("Renders an input for email", () => {
    const input = screen.queryByRole("email");
    expect(input).toBeInTheDocument();
  });

  it("Renders an input for password", () => {
    const input = screen.queryByRole("password");
    expect(input).toBeInTheDocument();
  });

  it("Renders an input for confirm password", () => {
    const input = screen.queryByRole("confirm-password");
    expect(input).toBeInTheDocument();
  });

  it("Renders a button to register", () => {
    const input = screen.queryByRole("register");
    expect(input).toBeInTheDocument();
  });
});
