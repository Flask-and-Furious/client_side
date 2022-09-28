import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Option, Subtitle, Title, HR } from "../../components";

import { Context } from "../../Context";

function LanguagePage() {
  const { user } = useContext(Context);

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
      navigate("/", { replace: true });
    }
  }, [user]);

  return (
    <>
    <div className="language-container">
      <div className="language-choice">
        <Subtitle subtitle="Choose a language to practice your debugging skills." cssClass={"language-subtitle"}/>
        <div className="language-buttons-div">
          <div className="language-btn">
            <Button text="Python" cssClass={"play"} handleClickEvent={clickHandler}/>
            <Button text="Javascript" cssClass={"play"} handleClickEvent={clickHandlerOne}/>
          </div>
        </div>
        {codeLanguage ? (
        <div className="language-play-button-div">
          <Button text="Let's play" cssClass={"play-2"} handleClickEvent={HandlerOne}/>
        </div>
        ) : null}
      </div>
      <div className="language-example">
        {codeLanguage =="python" ? <><h2>Python example</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
        : codeLanguage == "javascript" ? <><h2>Javascript Example</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></>
        : <><p>Example</p><p>Choose a language to see an example question</p></>  
        }
      </div>
    </div>
    <HR />
    <div className="how-it-works">
      <Subtitle subtitle="How it works" cssClass={"language-subtitle"}/>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    </>
  );
}

export default LanguagePage;
