/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Option from ".";

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

  test("Ensures label is present for user to read", () => {
    const label = screen.getByRole("label");

    expect(label).toBeInTheDocument();
    expect(label).toBeTruthy();
  });

  test("Ensures input is present for user to read", () => {
    const input = screen.getByRole("input");

    expect(input).toBeInTheDocument();
    expect(input).toBeTruthy();
  });
});
