/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Image from ".";

describe("Image component", () => {
  beforeEach(() => {
    const imgLabel = "";

    render(
      <BrowserRouter>
        <Image label={imgLabel} />
      </BrowserRouter>
    );
  });

  it("Renders an image", () => {
    const img = screen.queryByRole("img");
    expect(img).toBeInTheDocument();
  });
});
