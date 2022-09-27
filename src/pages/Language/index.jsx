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
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Choose language" />

      <div>
        <button onClick={clickHandler}>Python</button>
        <button onClick={clickHandlerOne}>Javascript</button>
        <div>
          {codeLanguage ? (
            <>
              <p>
                You chose:{" "}
                {codeLanguage.charAt(0).toUpperCase() + codeLanguage.slice(1)}
              </p>
              <button onClick={HandlerOne}>Let's Play</button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default LanguagePage;
