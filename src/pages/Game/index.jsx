import React, { useEffect, useState, useContext } from "react";

import { useNavigate } from "react-router-dom";
import { Context } from "../../Context";
import axios from "axios";
import CodeMirror from "@uiw/react-codemirror";
import { dracula } from "@uiw/codemirror-theme-dracula"; // code window theme
import { langs } from "@uiw/codemirror-extensions-langs"; // font themes for different languages
import _, { map } from "underscore"; // for deep comparing objects, arrays ...

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
  Loader,
} from "../../components";
import styles from "./index.module.css";

function Game() {
  const navigates = useNavigate();
  const { codeLanguage, setCodeLanguage } = useContext(Context);
  const { user, setUser } = useContext(Context);
  const { score, setScore } = useContext(Context);

  const handlertwo = () => {
    navigate("/language");
  };

  const pythonProcessingServer = "https://python-debug.herokuapp.com/code";
  //const pythonProcessingServer = "http://127.0.0.1:5000/code"


  const nodeProcessingServer =
    "https://flask-and-furious-node-backend.herokuapp.com/code";
  //const nodeProcessingServer = 'http://localhost:3000/code'

  // const nodeProcessingServer = 'https://flask-and-furious-node-backend.herokuapp.com/code'
  // const nodeProcessingServer = 'http://localhost:3000/code'


  ////

  ///
  const [progress, setProgress] = useState(0);

  // Here fetch the information about the logged in user's progress. This will be a number.
  // For example if he/she solved the first bug earlier, we change the "progress" to 2 with "setProgress(2)"

  const navigate = useNavigate();
  const [currentCodePackage, setCurrentCodePackage] = useState(
    codeLanguage == "python"
      ? pythonFetchedCodePackages[progress]
      : javascriptFetchedCodePackages[progress]
  );
  const [isCorrect, setIsCorrect] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [solvingTime, setSolvingTime] = useState(new Date().getTime());
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    if (!user) {
      navigate("/", { replace: true });
    }
  }, [user]);

  useEffect(() => {
    // update and reset information when jumping to the next question
    setCurrentCodePackage(
      codeLanguage == "python"
        ? pythonFetchedCodePackages[progress]
        : javascriptFetchedCodePackages[progress]
    );
    setIsAnswered(false);
    setIsCorrect(false);
    setIsButtonDisabled(false);
    setSolvingTime(new Date().getTime());
  }, [progress]);

  const submitCode = async () => {
    setIsLoading(true);
    await axios
      .post(
        codeLanguage == "python"
          ? pythonProcessingServer
          : nodeProcessingServer,
        { "code-package": currentCodePackage }
      ) // send codes to backend for processing
      .then((data) => {
        setIsLoading(false);
        // data.data will contain the debugged function return values in an array
        console.log("data.data: ", data.data);
        console.log(data.data[0], currentCodePackage["snippet"]["return-1"]);
        console.log(data.data[1], currentCodePackage["snippet"]["return-2"]);
        if (
          // to compare singe values or deep compare objects
          (data.data[0] === currentCodePackage["snippet"]["return-1"] ||
            _.isEqual(
              data.data[0],
              currentCodePackage["snippet"]["return-1"]
            )) &&
          (data.data[1] === currentCodePackage["snippet"]["return-2"] ||
            _.isEqual(data.data[1], currentCodePackage["snippet"]["return-2"]))
        ) {
          // we compare the incoming values with the saved return values from the database
          setIsCorrect(true); // if both match
          let myscore = score + 2;
          setScore(myscore);
          setIsButtonDisabled(true);
          const doneTime = new Date().getTime();
          const solvingSeconds =
            Math.round((doneTime - solvingTime) / 100) / 10;
          setSolvingTime(solvingSeconds);
          // Here some code to save this duration to user's profile. Maybe update if this is the quickest?
        } else {
          setErrorMessage(data.data);
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
      codeLanguage == "python"
        ? pythonFetchedCodePackages
        : javascriptFetchedCodePackages;
    if (progress + 1 === currentLanguagePackage.length) {
      navigate("/completed");
    }
    // Here some code to save user's new progress in the database
  };

  return (
    <>
      <div>Score: ⭐ {score} ⭐</div>

      <div>
        <p>
          Current language:{" "}
          {codeLanguage.charAt(0).toUpperCase() + codeLanguage.slice(1)}
        </p>
        <button onClick={handlertwo}>Change language</button>
      </div>

      <div></div>

      <Title title="Debugging Challenge" />
      <Subtitle subtitle={currentCodePackage["snippet"]["description"]} />
      <div id="flash-container" style={{ height: "30px" }}>
        {isLoading ? (
          <Loader />
        ) : (
          isAnswered && (
            <FlashMessage
              text={
                isCorrect
                  ? "✅ Correct!"
                  : `❌${errorMessage.error ? errorMessage.error : "Try again"}`
              }
            />
          )
        )}
        {isAnswered && isCorrect && (
          <FlashMessage text={`Solved in:${solvingTime} s`} />
        )}
      </div>
      <div style={{ textAlign: "start", margin: "20px", fontSize: "18px" }}>
        <CodeMirror
          value={currentCodePackage["snippet"]["body"]}
          theme={dracula}
          indentWithTab={true}
          onChange={(editor, change) => {
            setCurrentCodePackage(() => {
              return {
                id: currentCodePackage["id"], // this is basically changes the 'body' value only. It's the code from user's input. We need the other original values
                snippet: {
                  ...currentCodePackage["snippet"],
                  body: editor,
                },
              };
            });
          }}
          extensions={
            codeLanguage == "python" ? [langs.python()] : [langs.javascript()]
          }
        />
      </div>
      <div style={{ display: codeLanguage == "python" ? "block" : "none" }}>
        Please use 4 spaces for indentation<br></br>Avoid using TAB
      </div>
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
