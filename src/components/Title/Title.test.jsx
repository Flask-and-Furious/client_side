/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Title from "../index";

describe("Running Title component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Title />
      </BrowserRouter>
    );
  });
});

describe("Title Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Title />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
  });
});
