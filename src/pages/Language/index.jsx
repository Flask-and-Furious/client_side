import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useUserContext } from '../../Context';


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
  const { codeLanguage, setCodeLanguage } = useUserContext();

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
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Choose language" />

      <div>
        <button onClick={clickHandler}>python</button>⬅ choose one ⮕
        <button onClick={clickHandlerOne}>javascript</button>
        <div>
          <br></br>
          <p>Your selection {codeLanguage}</p>
          <br></br>

          {codeLanguage ? (
            <button onClick={HandlerOne}>Let's Play</button>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default LanguagePage;
