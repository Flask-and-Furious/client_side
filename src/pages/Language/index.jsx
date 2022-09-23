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
        forAndIdAttr="javascript"
        nameAttr="language"
      />
      <Option
        topic="Python"
        text="Which line number is wrong?"
        forAndIdAttr="python"
        nameAttr="language"
      />
      <Button text="Submit" />
    </>
  );
}

export default LanguagePage;
