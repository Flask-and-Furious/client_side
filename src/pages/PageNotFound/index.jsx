import React from "react";
import { Link } from "react-router-dom";

import { Button, Subtitle, Title } from "../../components";

function PageNotFound() {
  return (
    <>
      <Title title="Debugging Challenge" />
      <Subtitle subtitle="Page Not Found" />
      <Link to={"/"}>
        <Button text="Return to Home" />
      </Link>
    </>
  );
}

export default PageNotFound;
