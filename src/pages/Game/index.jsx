import React, { useEffect, useState }from "react";
import { useNavigate } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'
import { correctMessages, incorrectMessages } from "./feedback";

// import 'codemirror/keymap/sublime';       // Don't worry about these here, it's for CSS
// import 'codemirror/theme/dracula.css';

import { Button, Image, Input, Subtitle, Title } from "../../components";


function Game() {
  // fetch the data from the database here
  // convert it to an array which will look like this:
  const fetchedCodePackages = [
    {'id': 0,                       // 3 sample buggy functions
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'add',
        'body' : 'def add(a, b):\n\treturn a + a\n\n# Expectation: add(3,2) => 5',
        'to-execute': 'add(3,2)',
        'return' : '5'
      }
    },
    {'id': 1,
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'multiply',
        'body' : 'def multiply(a, b):\n\treturn a * a\n\n# Expectation: multiply(6,3) => 18',
        'to-execute': 'multiply(6,3)',
        'return' : '18'
      }
    },
    {'id': 2,
     'snippet': {
        'description': 'Dynamic description here',
        'import': 'no_space',
        'body' : 'def no_space(string):\n\tfor i in string:\n\t\tif i == " ":\n\t\t\ti.replace("")\n\n\treturn string\n\n# Expectation:\n# no_string("I >    3 Le    i d   os  !") => I<3Leidos',
        'to-execute': 'no_space("    he     l l o! ")',
        'return' : 'hello!'
      }
    }
  ]

  const [progress, setProgress] = useState(0)
  
  // Here fetch the information about the logged in user's progress. This will be a number. 
  // For example if he/she solved the first bug earlier, we change the "progress" to 2 with "setProgress(2)"
  
  const navigate = useNavigate()
  const [currentCodePackage, setCurrentCodePackage] = useState(fetchedCodePackages[progress]) 
  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)
  const [randomIndex, setRandomIndex] = useState(null) // This is only for random feedback messages, not important

  useEffect(() => { // update and reset information when jumping to the next question
    setCurrentCodePackage(fetchedCodePackages[progress])
    setIsAnswered(false)
    setIsCorrect(false)
  }, [progress])

  const submitCode = async () => {

    await axios.post('http://127.0.0.1:5000/code', {"code-package": currentCodePackage}) // send codes to backend for processing
      .then(data => {   // data.data will contain the debugged function return value
        console.log('data: ', data)
        if (data.data == currentCodePackage['snippet']['return']) { // we compare the incoming value with the saved return value from the database
          setIsCorrect(true)            // if it matches
          setRandomIndex(() => Math.floor(Math.random() * correctMessages.length))
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
      <div style={{display: isAnswered ? 'flex' : 'none'}}>{
      isCorrect ? `✅${correctMessages[randomIndex]}` :
        `❌${incorrectMessages[randomIndex]}`}</div>
      <div style={{textAlign: 'start', margin: '20px'}}>
      <CodeMirror value={currentCodePackage['snippet']['body']} 
              options={{
                // theme: 'monokai',  // These are for design only
                // keyMap: 'sublime',
                mode: 'jsx',
              }}
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
                console.log('currentCodePAckage: ', currentCodePackage)
              }} />
      </div>
      {/* <Image image="" /> */}
      {/* <Input name="" text="Which line number is wrong?" /> */}
      <div onClick={submitCode}><Button text="Submit" /></div>
      <div onClick={nextCode} style={{display: isCorrect ? 'block' : 'none'}}><Button text="Next" /></div>
    </>
  );
}

export default Game;
