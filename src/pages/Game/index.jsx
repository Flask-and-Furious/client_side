import React, { useState }from "react";
import CodeMirror from '@uiw/react-codemirror'
import axios from 'axios'
// import 'codemirror/keymap/sublime';
// import 'codemirror/theme/dracula.css';

import { Button, Image, Input, Subtitle, Title } from "../../components";


function Game() {
  
  const [code, setCode] = useState('const a = 0')
  const submitCode = () => {
    axios.post('http;//localhost:3000/code')
    console.log(code)
  }

  return (
    <>
      <Title title="Debugging Challenge" />
      <Subtitle subtitle="Expected output: hello(name) // Hello, Jack!" />
      <CodeMirror value={code} 
              options={{
                // theme: 'monokai',
                // keyMap: 'sublime',
                mode: 'jsx',
              }}
              onChange={(editor, change) => {
                setCode(editor)
              }} />
      {/* <Image image="" /> */}
      <Input name="" text="Which line number is wrong?" />
      <div onClick={submitCode}><Button text="Submit" /></div>
    </>
  );
}

export default Game;
