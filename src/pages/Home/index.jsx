import React from "react";

import { Button, Image, Subtitle, Title } from "../../components";
import home from "../../assets/home.jpg";
import article1 from "../../assets/article1.jpg"

function Home() {
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
        <div className="right-title">
          <Image image={home} altVal="hero image goes here" cssClass={"rightImg"}/>
        </div>
      </div>
      <div className="article1-container">
        <div>
          <Image image={article1} altVal="article 1 image goes here" cssClass={"rightImg"} />
        </div>
        <div>
          <Subtitle subtitle="Article 1 name goes here" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
      <div className="article2-container">
        <div>
          <Subtitle subtitle="Article 2 name goes here" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
          <Image image={article1} altVal="article 2 image goes here" cssClass={"rightImg"}/>
        </div>
      </div>
    </>
  );
}

export default Home;
