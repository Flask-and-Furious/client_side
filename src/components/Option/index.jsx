import React from "react";

function Option({ topic, attributeName }) {
  return (
    <>
      <label for="javascript">{topic}</label>
      <input type="radio" name={attributeName} id={attributeName} />
    </>
  );
}

export default Option;
