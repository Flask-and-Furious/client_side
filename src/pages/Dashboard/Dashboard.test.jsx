/**
 * @jest-environment jsdom
 */
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Dashboard from ".";
import { ContextProvider } from "../../Context";

describe("Dashboard page ", () => {
  it("renders Dashboard page ", () => {
    const dashpage = "";

    render(
      <BrowserRouter>
        <ContextProvider>
          <Dashboard label={dashpage} />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});
