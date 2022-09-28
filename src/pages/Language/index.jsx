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
      <Subtitle subtitle="Choose a language" />

      <div>
        <button onClick={clickHandler}>Python</button>
        <button onClick={clickHandlerOne}>Javascript</button>
      </div>

      <div>
        <p>
          Selected:{" "}
          {codeLanguage.charAt(0).toUpperCase() + codeLanguage.slice(1)}
        </p>
      </div>

      <div>
        <button onClick={HandlerOne}>Let's Play</button>
      </div>
    </>
  );
}

export default LanguagePage;
