/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Subtitle from "../index";

describe("Running Subtitle component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Subtitle />
      </BrowserRouter>
    );
  });
});

describe("Subtitle Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Subtitle />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
  });
});
