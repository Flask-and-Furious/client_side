import React from "react";

import { Button, Image, Input, Subtitle, Title } from "../../components";

function Game() {
  return (
    <>
      <Title title="Debugging Challenge" />
      <Subtitle subtitle="Question 1" />
      <Image image="" altVal="code image goes here" />
      <form action="">
        <Input name="question1" text="Which line number is wrong?" />
        <Button text="Submit" />
      </form>
    </>
  );
}

export default Game;
