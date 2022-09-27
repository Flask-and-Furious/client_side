import React from "react";

import styles from "./input.module.css";

function Input({ text, name, classVariant, type, children, onChange = () => {} }) {
  return (
    <>
      {/* <label htmlFor={name}>{children}</label> */}
      <label htmlFor={name}>{text}</label>
      <input required id={name} name={name} type={type} onChange={onChange} />
    </>
  );
}

export default Input;
