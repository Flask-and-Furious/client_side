import React, { useEffect, useRef, useState }from "react";
import { useNavigate } from "react-router-dom";

import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'; // code window theme
import { langs } from '@uiw/codemirror-extensions-langs'; // font themes for different languages

import { fetchedCodePackages } from "./questions";
import { correctMessages, incorrectMessages } from "./feedback";
import { Button, Image, Input, Subtitle, Title, FlashMessage } from "../../components";

function Game() {

  const [progress, setProgress] = useState(0)
  
  // Here fetch the information about the logged in user's progress. This will be a number. 
  // For example if he/she solved the first bug earlier, we change the "progress" to 2 with "setProgress(2)"
  const navigate = useNavigate()
  const [currentCodePackage, setCurrentCodePackage] = useState(fetchedCodePackages[progress]) 
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [isButtonDisabled, setIsButtonDisabled] = useState(false)
  const [solvingTime, setSolvingTime] = useState(new Date().getTime())
  const [randomIndex, setRandomIndex] = useState(null) // This is only for random feedback messages, not important

  useEffect(() => { // update and reset information when jumping to the next question
    setCurrentCodePackage(fetchedCodePackages[progress])
    setIsAnswered(false)
    setIsCorrect(false)
    setIsButtonDisabled(false)
    setSolvingTime(new Date().getTime())

  }, [progress])

  const submitCode = async () => {

    await axios.post('http://127.0.0.1:5000/code', {"code-package": currentCodePackage}) // send codes to backend for processing
      .then(data => {   // data.data will contain the debugged function return value
        console.log('data: ', data)
        if (data.data == currentCodePackage['snippet']['return']) { // we compare the incoming value with the saved return value from the database
          setIsCorrect(true)            // if it matches
          setRandomIndex(() => Math.floor(Math.random() * correctMessages.length))
          setIsButtonDisabled(true)
          const doneTime = new Date().getTime()
          const solvingSeconds = Math.round((doneTime - solvingTime) / 100) / 10
          setSolvingTime(solvingSeconds)
          // Here some code to save user's time to solve this bug. Maybe update if this is the quickest?
        } else {
          setIsCorrect(false)           // if it doesn't
          setRandomIndex(() => Math.floor(Math.random() * incorrectMessages.length))
        }
      })
      .catch(() => setIsCorrect(false))
      setIsAnswered(true) // this will make the feedback <div> visible in the DOM
  }

  const nextCode = () => {

    setProgress(prev => prev + 1)
    if (progress + 1 === fetchedCodePackages.length) {
      navigate('/completed')
    }
    // Here some code to save user's new progress in the database
  }

  return (
    <>
      <Title title="Debugging Challenge" />
      <Subtitle subtitle={currentCodePackage['snippet']['description']} />
      <FlashMessage style={{display: isAnswered ? 'flex' : 'none'}} text={isCorrect ? `✅${correctMessages[randomIndex]}` :
        `❌${incorrectMessages[randomIndex]}`}/> 
      <div style={{textAlign: 'start', margin: '20px', fontSize: '18px'}}>
        <FlashMessage style={{display: isCorrect ? 'flex' : 'none'}} text={`${solvingTime} s`}/>
      <CodeMirror value={currentCodePackage['snippet']['body']} 
              theme={dracula}
              onChange={(editor, change) => {
                setCurrentCodePackage(() => {
                  return {'id': currentCodePackage['id'], // this is basically changes the 'body' value only. It's the code from user's input. We need the other original values
                    'snippet': {
                    'description': currentCodePackage['snippet']['description'],
                    'import': currentCodePackage['snippet']['import'],
                    'body' : editor,
                    'to-execute': currentCodePackage['snippet']['to-execute'],
                    'return' : currentCodePackage['snippet']['return']
                    }
                  }
                })
              }}
              extensions={[langs.python()]} />
      </div>
      {/* <Image image="" /> */}
      {/* <Input name="" text="Which line number is wrong?" /> */}
      <div onClick={submitCode}><Button text="Submit" isDisabled={isButtonDisabled} /></div>
      <div onClick={nextCode} style={{display: isCorrect ? 'block' : 'none'}}><Button text="Next" /></div>
    </>
  );
}

export default Game;
