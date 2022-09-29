/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import FlashMessage from ".";

describe("Running FlashMessage component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <FlashMessage />
      </BrowserRouter>
    );
  });
});

describe("FlashMessage Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <FlashMessage />
      </BrowserRouter>
    );
  });

  test("Ensures FlashMessage message is present for user to read", () => {
    const message = screen.getByRole("flashMessage");

    expect(message).toBeInTheDocument();
    expect(typeof message.textContent).toBe("string");
    expect(message).toBeTruthy();
  });
});
