
import React, { useState,useEffect, useContext } from "react";
import { useUserContext } from '../../Context';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import { Button, Image, Subtitle, Title } from "../../components";
import { Context } from "../../Context";


function Home(props) {

  const { user } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
        navigate('/login', {replace: true});
    }
}, [user]);


  const { storedSessionUser, setStoredSessionUser } = useContext(Context);


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
