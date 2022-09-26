import React from "react";
import styles from "./input.module.css";

function Input({ name, classVariant, type, children, text, testRole }) {
  return (
    <>
      <label htmlFor={name}>{text}</label>
      {/* <label htmlFor={name}>{children}</label> */}
      <input role={testRole} id={name} name={name} type={type} />
    </>
  );
}

export default Input;
