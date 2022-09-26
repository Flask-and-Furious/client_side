/**
 * @jest-environment jsdom
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Game from ".";
import { ContextProvider } from "../../Context";

describe("Running Game component", () => {
  test("Ensures it renders without crashing", () => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Game />
        </ContextProvider>
      </BrowserRouter>
    );
  });
});

describe("Game Component Content", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <ContextProvider>
          <Game />
        </ContextProvider>
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

// describe("Submitting Game Component Content", () => {
//   beforeEach(() => {
//     render(
//       <BrowserRouter>
//         <ContextProvider>
//           <Game />
//         </ContextProvider>
//       </BrowserRouter>
//     );
//   });

//   test("Ensures input is cleared after submission (hitting enter)", () => {
//     const answerInput = screen.getByRole("codeMirror");

//     userEvent.type(answerInput, "test answer{enter}");
//     expect(answerInput.value).toBe("");
//   });

//   test("Ensures input is cleared after submission (clicking submit button)", () => {
//     const clickSubmit = screen.getByRole("button");
//     const answerInput = screen.getByRole("input");

//     userEvent.type(answerInput, "test answer");
//     userEvent.click(clickSubmit);
//     expect(answerInput.value).toBe("");
//   });
// });