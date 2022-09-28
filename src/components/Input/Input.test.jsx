/**
 * @jest-environment jsdom
 */

import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import Input from ".";
import { ContextProvider } from "../../Context";

describe("Running Input component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Input />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});
