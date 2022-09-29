import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Option, Subtitle, Title, HR, Image } from "../../components";

import { Context } from "../../Context";

import js_example from '../../assets/js_example.png'
import py_example from '../../assets/py_example.png'

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
        {codeLanguage =="python" ? <><p>Python example</p>
          <p><Image image={py_example} altVal="code snippet" cssClass={"snippet"} /></p>
        </>
        : codeLanguage == "javascript" ? <><p>Javascript Example</p>
        <p><Image image={js_example} altVal="code snippet" cssClass={"snippet"} /></p></>

        : <><p>Example</p><p>Choose a language to see an example question</p></>  
        }
      </div>
          
    </div>
    <HR />
    <div className="how-it-works">
      <Subtitle subtitle="How it works" cssClass={"language-subtitle"}/>
      <p>You will see a code snippet that has some bugs. Try to find those bugs and fix them. When you are ready, submit your code. The error messages might guide you on your way to success.</p>
    </div>
    </>
  );
}

export default LanguagePage;
