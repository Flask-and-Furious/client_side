import React from "react";
import { useNavigate } from "react-router-dom";


import styles from "./index.module.css"

function Button({ text, isDisabled, nextPage, cssClass, handleClick }) {
  // const goTo = useNavigate();

  // function handleNavigation() {
  //   goTo(nextPage);
  // }

  return (
    <button disabled={isDisabled} onClick={handleClick} className={styles[`${cssClass}`]}>
      {text}
    </button>
  );

}

export default Button;
