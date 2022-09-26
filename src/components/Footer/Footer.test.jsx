/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Footer from ".";

describe("Footer", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
  });

  it("Displays a footer with appropriate text", () => {
    const footer = screen.queryByRole("footer");

    expect(footer).toBeInTheDocument();
  });
});
