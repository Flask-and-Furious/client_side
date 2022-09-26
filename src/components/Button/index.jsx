import React from "react";

function Button({ text, isDisabled, testRole }) {
  return (
    <button className="btn" disabled={isDisabled} role={testRole}>
      {text}
    </button>
  );
}

export default Button;
