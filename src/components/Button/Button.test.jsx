/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Button from ".";
import { ContextProvider } from "../../Context";

describe("Running Button component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Button />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("Button", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Button />
      </BrowserRouter>
    );
  });

  it("Renders a button", () => {
    const button = screen.queryByRole("button");
    expect(button).toBeInTheDocument();
  });
});
