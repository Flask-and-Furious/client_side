/**
 * @jest-environment jsdom
 */
import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Completed from ".";
import { ContextProvider } from "../../Context";

describe("completed page ", () => {
  it("renders completed page ", () => {
    const completeLabel = "";

    render(
      <BrowserRouter>
        <ContextProvider>
          <Completed label={completeLabel} />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});
