/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import HR from ".";

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
