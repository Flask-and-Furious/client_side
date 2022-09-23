/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from ".";

describe("Running Home component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
  });
});

describe("Home Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
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

  test("Ensures all images title are present for user to see", () => {
    const images = screen.getAllByRole("img");

    images.map((singleImage) => {
      expect(singleImage).toBeInTheDocument();
      expect(singleImage).toBeTruthy();
    });
  });
});
