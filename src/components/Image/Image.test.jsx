/** @jest-environment jsdom */
import React from "react";
import { render } from "@testing-library/react";

import Image from ".";

describe("image component ", () => {
  it("renders image ", () => {
    const imgLabel = "";

    render(<Image label={imgLabel} />);
  });
});
