import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ text, isDisabled, nextPage }) {
  const goTo = useNavigate();

  function handleNavigation() {
    goTo(nextPage);
  }

  return (
    <button className="btn" disabled={isDisabled} onClick={handleNavigation}>
      {text}
    </button>
  );
}

export default Button;
