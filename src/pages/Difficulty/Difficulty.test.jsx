/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";

import Difficulty from ".";

describe("Difficulty page ", () => {
  it("renders Difficulty page ", () => {
    const diffpage = "";

    render(<Difficulty a={diffpage} />);
  });
});
