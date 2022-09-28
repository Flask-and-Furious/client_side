/**
 * @jest-environment jsdom
 */

import { screen, render, waitFor } from "@testing-library/react";
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

describe("Register component contents", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Register />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  it("Renders a register title present for users to read", () => {
    const title = screen.queryByRole("heading");

    expect(title).toBeInTheDocument();
    expect(typeof title.textContent).toBe("string");
    expect(title).toBeTruthy();
  });

  it("Renders all inputs for registering", () => {
    const inputs = screen.getAllByRole("input");
    expect(inputs).toHaveLength(4);

    inputs.map((single) => {
      expect(single).toBeInTheDocument();
      expect(typeof single.textContent).toBe("string");
      expect(single).toBeTruthy();
    });
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

  test("Ensures email input is present", () => {
    const emailInput = screen.getByPlaceholderText("Email");

    expect(emailInput).toBeInTheDocument();
    expect(typeof emailInput.textContent).toBe("string");
    expect(emailInput).toBeTruthy();
  });

  test("Ensures register button is present", () => {
    const registerBtn = screen.getByRole("input", { name: /Register/i });

    expect(registerBtn).toBeInTheDocument();
    expect(typeof registerBtn.textContent).toBe("string");
    expect(typeof registerBtn.value).toBe("string");
    expect(registerBtn).toBeTruthy();
  });
});

describe("Register form functionality", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Register onSubmitForTest={onSubmit} />
        </ContextProvider>
      </BrowserRouter>
    );
  });

  test("Ensures register form can be submitted", () => {
    const registerBtn = screen.getByRole("input", { name: /Register/i });

    const usernameInput = screen.getByPlaceholderText("Username");
    const passwordInput = screen.getByPlaceholderText("Password");

    userEvent.type(usernameInput, "testName");
    userEvent.type(passwordInput, "test@test.com");

    userEvent.click(registerBtn);

    waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
    });
  });

  test("clears user input after submitting username", () => {
    const usernameInput = screen.getByPlaceholderText("Username");
    userEvent.type(usernameInput, "testName{enter}");
    expect(usernameInput.value).toBe("");
    expect(usernameInput.value).not.toBeTruthy();
    expect(usernameInput.value).toHaveLength(0);
  });

  test("clears user input after submitting email", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    userEvent.type(emailInput, "test@test.com{enter}");
    expect(emailInput.value).toBe("");
    expect(emailInput.value).not.toBeTruthy();
    expect(emailInput.value).toHaveLength(0);
  });

  test("clears user input after submitting password", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    userEvent.type(passwordInput, "testPassword{enter}");
    expect(passwordInput.value).toBe("");
    expect(passwordInput.value).not.toBeTruthy();
    expect(passwordInput.value).toHaveLength(0);
  });
});
