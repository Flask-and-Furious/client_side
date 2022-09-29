/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import LanguagePage from ".";
import { ContextProvider } from "../../Context";

describe("Running LanguagePage component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <LanguagePage />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("LanguagePage Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <LanguagePage />
        </ContextProvider>
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
