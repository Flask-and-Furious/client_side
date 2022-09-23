import React from "react";

function Option({ topic, forAndIdAttr, nameAttr }) {
  return (
    <>
      <label for={forAndIdAttr} role="label">{topic}</label>
      <input type="radio" name={nameAttr} id={forAndIdAttr}  role="input"/>
    </>
  );
}

export default Option;
