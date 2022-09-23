/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import HomePage from "../index";

describe("Running Home component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });
});

describe("Home Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
  });
});
