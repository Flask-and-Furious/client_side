/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";

import Dashboard from ".";

describe("Dashboard page ", () => {
  it("renders Dashboard page ", () => {
    const dashpage = "";

    render(<Dashboard label={dashpage} />);
  });
});
