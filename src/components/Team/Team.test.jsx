/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Team from ".";
import { ContextProvider } from "../../Context";

describe("Running Team component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Team />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("Running Team component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Team />
      </BrowserRouter>
    );
  });
});

describe("Team Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Team />
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
