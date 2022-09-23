/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

import Game from "../index";

describe("Running Game component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );
  });
});

describe("Game Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Game />
      </BrowserRouter>
    );
  });

  test("Ensures title is present for user to read", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
    expect(title).toBeTruthy();
  });
});
