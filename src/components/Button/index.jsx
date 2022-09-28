import React from "react";
import { useNavigate } from "react-router-dom";


import styles from "./index.module.css"

function Button({ text, isDisabled, nextPage, cssClass, handleClickEvent }) {

  return (
    <button disabled={isDisabled} onClick={handleClickEvent} className={styles[`${cssClass}`]}>
      {text}
    </button>
  );

}

export default Button;
