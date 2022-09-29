/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import Footer from ".";
import { ContextProvider } from "../../Context";

describe("Running Footer component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Footer />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

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
