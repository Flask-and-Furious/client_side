import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import AOS from 'aos'

import { Button, Image, Subtitle, Title, HR } from "../../components";
import home from "../../assets/home.jpg";
import article1 from "../../assets/article1.jpg"
import snippet1 from "../../assets/snippet1.png"
import snippet2 from "../../assets/snippet2.png"

function Home() {
  AOS.init({
    duration: 2000
  })
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);

  return (
    <>
      <div className="home-title-container">
        <div className="left-title">
          <div>
            <Title title="Flask & Furious" />
            <Subtitle subtitle="Catchy slogan goes here" />
            <Button text="Play" cssClass={"play"}/>
          </div>
        </div>
        <div className="right-title" data-aos="zoom-in-left">
          <Image image={home} altVal="hero image goes here" cssClass={"rightImg"}/>
        </div>
      </div>
      <div className="article1-container">
        <div data-aos="zoom-in-right">
          <Image image={article1} altVal="article 1 image goes here" cssClass={"rightImg"} />
        </div>
        <div>
          <Subtitle subtitle="Article 1 name goes here" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div><HR /></div>
      <div className="article2-container">
        <div data-aos="fade-up">
          <Subtitle subtitle="Article 2 name goes here" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div data-aos="zoom-in-left">
          <Image image={snippet1} altVal="article 2 image goes here" cssClass={"snippets"}/>
        </div>
      </div>
      <div><HR /></div>
      <div className="article1-container">
        <div data-aos="zoom-in-right">
          <Image image={snippet2} altVal="article 1 image goes here" cssClass={"snippets"} />
        </div>
        <div data-aos="fade-up">
          <Subtitle subtitle="Article 1 name goes here" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      {/* <Title title="Flask & Furious" />
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
      <Image image="" altVal="article 2 image goes here" /> */}
    </>
  );
}

export default Home;
