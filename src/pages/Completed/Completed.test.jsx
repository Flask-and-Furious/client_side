/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";

import Completed from ".";

describe("completed page ", () => {
  it("renders completed page ", () => {
    const completeLabel = "";

    render(<Completed label={completeLabel} />);
  });
});
