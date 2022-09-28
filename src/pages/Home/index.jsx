import React, { useState, useContext,useEffect } from "react";

import { Button, Image, Subtitle, Title } from "../../components";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, setUser } = useContext(Context);

  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user) {
        navigateTo('/login', {replace: true});
    }
  }, [user]);

  return (
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Catchy slogan goes here" />
      <Image image="" altVal="hero image goes here" />
      {storedSessionUser ? null : (
        <>
          <Button text="Login" nextPage="/login" />
          <Button text="Register" nextPage="/register" />
        </>
      )}
      <Subtitle subtitle="Article 1 name goes here" />
      <Image image="" altVal="article 1 image goes here" />
      <Subtitle subtitle="Article 2 name goes here" />
      <Image image="" altVal="article 2 image goes here" />
    </>
  );
}

export default Home;
