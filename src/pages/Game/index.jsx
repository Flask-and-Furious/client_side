import React, { useState }from "react";
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';

import { Button, Image, Input, Subtitle, Title } from "../../components";


function Game() {
  
  const [currentCodeBody, setCurrentCodeBody] = useState('def add(a, b):\n\treturn a + a\n\n# Expectation: add(3,2) => 5')
  
  const currentCode = {'snippet': {
    'import': 'add',
    'body' : currentCodeBody,
    'to-execute': 'add(3,2)',
    'return' : '5'
  }}

  const [isCorrect, setIsCorrect] = useState(false)
  const [isAnswered, setIsAnswered] = useState(false)

  const submitCode = async () => {

    // console.log('currentCode to send to backend:', currentCode);
    // const response = await axios.post('http://127.0.0.1:5000/code', {"code-package": currentCode})
    // console.log('response: ', response)
    await axios.post('http://127.0.0.1:5000/code', {"code-package": currentCode})
      .then(data => {
        console.log('data.data: ', data.data, 'currentCode[snippet][return]: ', currentCode['snippet']['return']);
        if (data.data == currentCode['snippet']['return']) {
          setIsCorrect(true)
        } else {
          setIsCorrect(false)
        }
        setIsAnswered(true)
      }
    )
  }

  return (
    <>
      <Title title="Debugging Challenge" />
      <Subtitle subtitle="Fix the function!" />
      <div style={{display: isAnswered ? 'flex' : 'none'}}>{isCorrect ? '✅Good job!' : '❌Try again'}</div>
      <div style={{textAlign: 'start'}}>
      <CodeMirror value={currentCodeBody} 
              options={{
                // theme: 'monokai',
                // keyMap: 'sublime',
                mode: 'jsx',
              }}
              onChange={(editor, change) => {
                setCurrentCodeBody(editor)
                console.log('currentCodeBody: ', currentCodeBody)
                console.log('currentCode itself: ', currentCode)
              }} />
      </div>
      {/* <Image image="" /> */}
      {/* <Input name="" text="Which line number is wrong?" /> */}
      <div onClick={submitCode}><Button text="Submit" /></div>
    </>
  );
}

export default Game;
