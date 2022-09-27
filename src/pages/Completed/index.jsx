import React, { useContext } from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function CompletedPage() {
  const { storedUsername, setStoredUsername } = useContext(Context);

  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`Well Done ${storedUsername}!`} />
        <Button text="Go to Dashboard" nextPage="/dashboard" />
      </div>

      {/* <div>Well Done!</div>

      <a href="/dashboard">Go to Dashboard</a> */}
    </>
  );
}

export default CompletedPage;
