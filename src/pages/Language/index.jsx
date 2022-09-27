import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Game from "../Game";
import { Button, Option, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function LanguagePage() {
  const [state, setstate] = useState({ data: "" });
  const [mylanguage, setLanguage] = useState("");

  const handleChange = (event) => {
    console.log("Label 👉️", event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setLanguage(event.target.value);
  };

  console.log("- lans");
  const changeState = (e) => {
    setstate({ data: e.target.value });
  };

  const navigate = useNavigate();
  const { codeLanguage, setCodeLanguage } = useContext(Context);

  const clickHandler = () => {
    setCodeLanguage((prevcount) => "python");
  };

  const clickHandlerOne = () => {
    setCodeLanguage((prevcount) => "javascript");
  };

  const HandlerOne = () => {
    navigate("/game");
  };
  return (
    <div className="language-container">
      <div className="language-left">
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Choose language" />
        <div>
          <button onClick={clickHandler}>python</button>⬅ choose one ⮕
          <button onClick={clickHandlerOne}>javascript</button>
          <div>
            <br></br>
            <p>Your selection {codeLanguage}</p>
            <br></br>
          {/* <button onClick={HandlerOne}>go to Game page</button> */}

          {codeLanguage ? (
            <button onClick={HandlerOne}>Let's Play</button>
          ) : null}
        </div>
        </div>
      </div>
      <div className="language-right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  );
}

export default LanguagePage;
