import React from "react";

import { Button, Option, Subtitle, Title } from "../../components";

function LanguagePage() {
  return (
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Choose language" />
      <Option
        topic="JavaScript"
        text="Which line number is wrong?"
        attributeName="javascript"
      />
      <Option
        topic="Python"
        text="Which line number is wrong?"
        attributeName="python"
      />
      <Button text="Submit" />
    </>
  );
}

export default LanguagePage;
