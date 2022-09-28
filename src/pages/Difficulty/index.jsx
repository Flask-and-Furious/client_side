import React from "react";
import { Title, Button, Option, Subtitle } from "../../components";

function DifficultyPage() {
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Choose your pace:" />
        <Option />
        <Button text="Let's Play" nextPage="/game" />
      </div>

      {/* <div>
        <Title>Debugging Challenge</Title>
        <p>Choose your pace:</p>
        <Option />
      </div>

      <div>
        <Button />
      </div> */}
    </>
  );
}

export default DifficultyPage;
