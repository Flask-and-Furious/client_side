import React, { useContext } from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);

  return (
    <>
    <div className="dashboard-container">
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`${storedSessionUser}'s Dashboard`} />
        <p>Current Level: EASY</p>
      </div>
      <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>
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
