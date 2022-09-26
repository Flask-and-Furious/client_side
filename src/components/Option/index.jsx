import React from "react";

function Option() {
  return (
    <>
      <label htmlFor="language" role="label">
        Choose your language
      </label>
      <select name="language" id="language">
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
      </select>
    </>
  );
}

export default Option;
