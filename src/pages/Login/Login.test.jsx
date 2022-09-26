/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Login from ".";

describe("Running Login component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });
});

describe("Login Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  test("Ensures login title is present for user to read", () => {
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(typeof title.textContent).toBe("string");
    expect(title).toBeTruthy();
  });
});

// const testFunc = jest.fn()

describe("Login Page", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it("Renders an input for username", () => {
    const input = screen.queryByRole("username");
    expect(input).toBeInTheDocument();
  });

  it("Renders an input for password", () => {
    const input = screen.queryByRole("password");
    expect(input).toBeInTheDocument();
  });

  it("Renders a button to login", () => {
    const input = screen.queryByRole("login");

    //await userEvent.click(input)
    //expect(testFunc).toHaveBeenCalled()
    expect(input).toBeInTheDocument();
  });
});
