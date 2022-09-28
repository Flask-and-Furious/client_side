import React, { useContext } from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={"Your Dashboard"} />
      </div>

      <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>
    </>
  );
}

export default DashboardPage;
