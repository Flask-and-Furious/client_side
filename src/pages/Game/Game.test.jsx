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

describe("Game component contents", () => {
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

  test("Ensures submit button is present", () => {
    const submitBtn = screen.getByRole("button", { name: /Submit/i });

    expect(submitBtn).toBeInTheDocument();
    expect(typeof submitBtn.textContent).toBe("string");
    expect(typeof submitBtn.value).toBe("string");
    expect(submitBtn).toBeTruthy();
  });

  test("Ensures language description paragraph is present", () => {
    const para1 = screen.getByRole("para1");

    expect(para1).toBeInTheDocument();
    expect(typeof para1.textContent).toBe("string");
    expect(para1).toBeTruthy();
  });

  test("Ensures 'Change Language' paragraph is present", () => {
    const para2 = screen.getByRole("para2");

    expect(para2).toBeInTheDocument();
    expect(typeof para2.textContent).toBe("string");
    expect(para2).toBeTruthy();
  });

  test("Ensures 'Change Language' button is present", () => {
    const changeBtn = screen.getByRole("button", { name: /Change Language/i });

    expect(changeBtn).toBeInTheDocument();
    expect(typeof changeBtn.textContent).toBe("string");
    expect(typeof changeBtn.value).toBe("string");
    expect(changeBtn).toBeTruthy();
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

//     userEvent.type(answerInput, "testAnswer{enter}");
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
