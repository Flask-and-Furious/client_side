import React from "react";

function Option() {
  return (
    <>
      <label htmlFor="language" role="label"></label>
      <select name="language" id="language">
        <option value="javascript">Free play</option>
        <option value="python">Timed</option>
      </select>
    </>
  );
}

export default Option;
