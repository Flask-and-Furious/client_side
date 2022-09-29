/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import HR from ".";
import { ContextProvider } from "../../Context";

describe("Running HR component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <HR />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("HR component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HR />
      </BrowserRouter>
    );
  });

  it("Renders a <hr /> line", () => {
    const hrLine = screen.queryByRole("hr");
    expect(hrLine).toBeInTheDocument();
  });
});
