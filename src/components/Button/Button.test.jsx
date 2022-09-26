/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Button from ".";

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
