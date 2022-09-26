/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";

import NavBar from ".";

describe("navbar component ", () => {
  it("renders navbar ", () => {
    const myNav = "";

    render(<NavBar label={myNav} />);
  });
});
