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

describe("Login component contents", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Login />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  it("Renders all inputs for logging in", () => {
    const inputs = screen.getAllByRole("input");
    expect(inputs).toHaveLength(3);

    inputs.map((singleInput) => {
      expect(singleInput).toBeInTheDocument();
      expect(typeof singleInput.textContent).toBe("string");
      expect(singleInput).toBeTruthy();
    });
  });

  test("Ensures login title is present for user to read", () => {
    const title = screen.getByRole("heading");

    expect(title).toBeInTheDocument();
    expect(typeof title.textContent).toBe("string");
    expect(title).toBeTruthy();
  });

  test("Ensures username input is present", () => {
    const usernameInput = screen.getByPlaceholderText("Username");

    expect(usernameInput).toBeInTheDocument();
    expect(typeof usernameInput.textContent).toBe("string");
    expect(usernameInput).toBeTruthy();
  });

  test("Ensures password input is present", () => {
    const passwordInput = screen.getByPlaceholderText("Password");

    expect(passwordInput).toBeInTheDocument();
    expect(typeof passwordInput.textContent).toBe("string");
    expect(passwordInput).toBeTruthy();
  });
});

describe("Login form functionality", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Login />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  test("clears user input after submitting username", () => {
    const usernameInput = screen.getByPlaceholderText("Username");
    userEvent.type(usernameInput, "Beth{enter}");
    expect(usernameInput.value).toBe("");
    expect(usernameInput.value).not.toBeTruthy();
    expect(usernameInput.value).toHaveLength(0);
  });

  test("clears user input after submitting password", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    userEvent.type(passwordInput, "Beth{enter}");
    expect(passwordInput.value).toBe("");
    expect(passwordInput.value).not.toBeTruthy();
    expect(passwordInput.value).toHaveLength(0);
  });
});
