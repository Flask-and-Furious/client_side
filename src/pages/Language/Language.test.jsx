/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import LanguagePage from "../index";

describe("Running LanguagePage component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <LanguagePage />
      </BrowserRouter>
    );
  });
});

describe("LanguagePage Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <LanguagePage />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
  });
});
