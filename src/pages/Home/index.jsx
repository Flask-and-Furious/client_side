import React from "react";

import { Button, Image, Subtitle, Title } from "../../components";

function Home() {
  return (
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Catchy slogan goes here" />
      <Image image="" altVal="hero image goes here" />
      <Button text="Login" nextPage="/login" />
      <Button text="Register" nextPage="/register" />
      <Subtitle subtitle="Article 1 name goes here" />
      <Image image="" altVal="article 1 image goes here" />
      <Subtitle subtitle="Article 2 name goes here" />
      <Image image="" altVal="article 2 image goes here" />
    </>
  );
}

export default Home;
