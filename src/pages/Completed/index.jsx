import React from "react";
import { Button, Subtitle, Title } from "../../components";

function CompletedPage() {
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Well Done!" />
        <Button text="Go to Dashboard" nextPage="/dashboard" />
      </div>

      {/* <div>Well Done!</div>

      <a href="/dashboard">Go to Dashboard</a> */}
    </>
  );
}

export default CompletedPage;
