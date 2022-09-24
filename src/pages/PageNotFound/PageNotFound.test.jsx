/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

import PageNotFound from ".";

describe("Running PageNotFound component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
  });
});

describe("PageNotFound Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <PageNotFound />
      </BrowserRouter>
    );
  });

  test("Ensures every title is present for user to read", () => {
    const title = screen.getAllByRole("heading");

    title.map((singleTitle) => {
      expect(singleTitle).toBeInTheDocument();
      expect(typeof singleTitle.textContent).toBe("string");
      expect(singleTitle).toBeTruthy();
    });
  });
});

describe("PageNotFound Button", () => {
  test("Ensures button redirects back to home page", () => {
    const badRoute = "/very/bad/route";

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <PageNotFound />
      </MemoryRouter>
    );

    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
