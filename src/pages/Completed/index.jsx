import React, { useContext } from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function CompletedPage() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);

  return (
    <>
      <div className="completed-container">
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`Well Done ${storedSessionUser}!`} />
        <Button text="Go to Dashboard" nextPage="/dashboard" />
      </div>

      {/* <div>Well Done!</div>

      <a href="/dashboard">Go to Dashboard</a> */}
    </>
  );
}

export default CompletedPage;
