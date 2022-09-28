import React, { useContext, useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Game from "../Game";
import { Button, Option, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function LanguagePage() {
  const [state, setstate] = useState({ data: "" });
  const [mylanguage, setLanguage] = useState("");
  const { user, setUser } = useContext(Context);

  

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

  useEffect(() => {
    if (!user) {
        navigate('/login', {replace: true});
    }
  }, [user]);

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
