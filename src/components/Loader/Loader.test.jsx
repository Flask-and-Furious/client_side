/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from ".";

describe("Running Loader component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    );
  });
});

describe("Loader test role", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Loader />
      </BrowserRouter>
    );
  });

  it("Ensures Loader div is present", () => {
    const div = screen.queryByRole("div");
    expect(div).toBeInTheDocument();
  });
});
