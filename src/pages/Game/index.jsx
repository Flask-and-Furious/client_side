import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula"; // code window theme
import { langs } from "@uiw/codemirror-extensions-langs"; // font themes for different languages

import { pythonFetchedCodePackages } from "./pythonQuestions";
import { javascriptFetchedCodePackages } from "./javascriptQuestions";
import { correctMessages, incorrectMessages } from "./feedback";
import {
  Button,
  Image,
  Input,
  Subtitle,
  Title,
  FlashMessage,
} from "../../components";

function Game(props) {
  const navigates = useNavigate();
  const { codeLanguage, setCodeLanguage } = useContext(Context);
  const handlertwo = () => {
    navigates("/language");
  };

  // const language = 'python' // language will be passed by props
  const language = "javascript"; // language will be passed by props

  ////

  ///
  const [progress, setProgress] = useState(0);

  // Here fetch the information about the logged in user's progress. This will be a number.
  // For example if he/she solved the first bug earlier, we change the "progress" to 2 with "setProgress(2)"

  const navigate = useNavigate();
  const [currentCodePackage, setCurrentCodePackage] = useState(
    language == codeLanguage
      ? pythonFetchedCodePackages[progress]
      : javascriptFetchedCodePackages[progress]
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [solvingTime, setSolvingTime] = useState(new Date().getTime());
  const [randomIndex, setRandomIndex] = useState(null); // This is only for random feedback messages, not important

  useEffect(() => {
    // update and reset information when jumping to the next question
    setCurrentCodePackage(
      language == codeLanguage
        ? pythonFetchedCodePackages[progress]
        : javascriptFetchedCodePackages[progress]
    );
    setIsAnswered(false);
    setIsCorrect(false);
    setIsButtonDisabled(false);
    setSolvingTime(new Date().getTime());
  }, [progress]);

  const submitCode = async () => {
    await axios
      .post(
        language == codeLanguage
          ? "http://127.0.0.1:5000/code"
          : "http://localhost:3000/code",
        { "code-package": currentCodePackage }
      ) // send codes to backend for processing
      .then((data) => {
        // data.data will contain the debugged function return values in an array
        console.log("data.data: ", data.data);
        if (
          data.data[0] === currentCodePackage["snippet"]["return-1"] &&
          data.data[1] === currentCodePackage["snippet"]["return-2"]
        ) {
          // we compare the incoming values with the saved return values from the database
          setIsCorrect(true); // if both match
          setRandomIndex(() =>
            Math.floor(Math.random() * correctMessages.length)
          );
          setIsButtonDisabled(true);
          const doneTime = new Date().getTime();
          const solvingSeconds =
            Math.round((doneTime - solvingTime) / 100) / 10;
          setSolvingTime(solvingSeconds);
          // Here some code to save this duration to user's profile. Maybe update if this is the quickest?
        } else {
          setIsCorrect(false); // if it doesn't
          setRandomIndex(() =>
            Math.floor(Math.random() * incorrectMessages.length)
          );
        }
      })
      .catch(() => setIsCorrect(false));
    setIsAnswered(true); // this will make the feedback <div> visible in the DOM
  };

  const nextCode = () => {
    setProgress((prev) => prev + 1);
    const currentLanguagePackage =
      language == codeLanguage
        ? pythonFetchedCodePackages
        : javascriptFetchedCodePackages;
    if (progress + 1 === currentLanguagePackage.length) {
      navigate("/completed");
    }
    // Here some code to save user's new progress in the database
  };

  return (
    <>
      <div>
        Updated language :<b>{codeLanguage}</b>
        <button onClick={handlertwo}>choose language </button>
      </div>

      <div></div>

      <Title title="Debugging Challenge" />
      <Subtitle subtitle={currentCodePackage["snippet"]["description"]} />
      <FlashMessage
        style={{ display: isAnswered ? "flex" : "none" }}
        text={
          isCorrect
            ? `✅${correctMessages[randomIndex]}`
            : `❌${incorrectMessages[randomIndex]}`
        }
      />
      <div style={{ textAlign: "start", margin: "20px", fontSize: "18px" }}>
        <FlashMessage
          style={{ display: isCorrect ? "flex" : "none" }}
          text={`${solvingTime} s`}
        />
        <CodeMirror
          value={currentCodePackage["snippet"]["body"]}
          theme={dracula}
          indentWithTab={true}
          onChange={(editor, change) => {
            setCurrentCodePackage(() => {
              return {
                id: currentCodePackage["id"], // this is basically changes the 'body' value only. It's the code from user's input. We need the other original values
                snippet: {
                  description: currentCodePackage["snippet"]["description"],
                  import: currentCodePackage["snippet"]["import"],
                  body: editor,
                  "to-execute-1": currentCodePackage["snippet"]["to-execute-1"],
                  "return-1": currentCodePackage["snippet"]["return-1"],
                  "to-execute-2": currentCodePackage["snippet"]["to-execute-2"],
                  "return-2": currentCodePackage["snippet"]["return-2"],
                },
              };
            });
          }}
          extensions={[langs.javascript(), langs.python()]}
        />
      </div>
      {/* <Image image="" /> */}
      {/* <Input name="" text="Which line number is wrong?" /> */}
      <div onClick={submitCode}>
        <Button text="Submit" isDisabled={isButtonDisabled} />
      </div>
      <div onClick={nextCode} style={{ display: isCorrect ? "block" : "none" }}>
        <Button text="Next" />
      </div>
    </>
  );
}

export default Game;
