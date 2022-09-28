import React, { useState,useEffect } from "react";
import { useUserContext } from '../../Context';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Button, Image, Subtitle, Title } from "../../components";

function Home(props) {

  const { user } = useUserContext();
  const navigate = useNavigate();
/*
  axios({
    method: "GET",
    url:"/",
    headers: {
      Authorization: 'Bearer ' + props.token
    }
  })
  .then((response) => {
    const res =response.data
    res.access_token && props.setToken(res.access_token)

  })*/


  useEffect(() => {
    if (!user) {
        navigate('/login', {replace: true});
    }
}, [user]);

  return (
    <>
   
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Catchy slogan goes here" />
      <Image image="" altVal="hero image goes here" />
      <Button text="Login" />
      <Button text="Register" />
      <Subtitle subtitle="Article 1 name goes here" />
      <Image image="" altVal="article 1 image goes here" />
      <Subtitle subtitle="Article 2 name goes here" />
      <Image image="" altVal="article 2 image goes here" />

    </>
  );
}

export default Home;
