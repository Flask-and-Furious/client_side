import React from "react";

function Option() {
  return (
    <>
      <label for="javascript">JavaScript</label>
      <input type="radio" name="chosenLanguage" id="javascript" />

      <label for="python">Python</label>
      <input type="radio" name="chosenLanguage" id="python" />
    </>
  );
}

export default Option;
