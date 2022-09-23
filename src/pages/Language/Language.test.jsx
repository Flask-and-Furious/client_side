/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import LanguagePage from ".";

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

  test("Ensures every title is present for user to read", () => {
    const title = screen.getAllByRole("heading");

    title.map((singleTitle) => {
      expect(singleTitle).toBeInTheDocument();
      expect(typeof singleTitle.textContent).toBe("string");
      expect(singleTitle).toBeTruthy();
    });
  });
});
