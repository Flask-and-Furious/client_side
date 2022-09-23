/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Option from "../index";

describe("Running Option component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Option />
      </BrowserRouter>
    );
  });
});

describe("Option Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Option />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const label = screen.getByRole("label");
    expect(label).toBeInTheDocument();
    expect(label).toBeTruthy();
  });
});
