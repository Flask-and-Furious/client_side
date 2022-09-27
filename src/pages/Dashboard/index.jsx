import React from "react";
import { Button, Subtitle, Title } from "../../components";

function DashboardPage() {
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Your Dashboard" />
        <p>Current Level: EASY</p>
      </div>

      <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>

      {/* 
      <div>
        <Title>Debugging Challenge</Title>
        <p>Current Level: EASY</p>
      </div>

      <div>
        <Button />
      </div> */}
    </>
  );
}

export default DashboardPage;
