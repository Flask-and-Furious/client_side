import React, { useContext, useState } from "react";

import { Button, Option, Subtitle, Title } from "../../components";
import Game from "../Game";
import { useNavigate } from "react-router-dom";

import { Context } from "../../Context";

function LanguagePage() {

  const [state, setstate] = useState({data:""})
  const [mylanguage, setLanguage] = useState("")

  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setLanguage(event.target.value);
  };
  
  console.log( "- lans")
  const changeState = (e) => {  
    setstate({data:e.target.value}); 
   }; 


   const navigate = useNavigate();
    const { items, setItems } = useContext(Context);
      
    const clickHandler = () => {
        setItems((prevcount) => "python");
    };
      
    const clickHandlerOne = () => {
        setItems((prevcount) =>  "javascript");
    };
      
    const HandlerOne = () => {
        navigate("/game");
    };
  return (
    <>
    
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Choose language" />
      
    
       

       
    
                    
                <div>
            <button onClick={clickHandler}>python</button>
            ⬅ choose one ⮕
            <button onClick={clickHandlerOne}>javascript</button>
            <div>
              <br></br>
              <p>Your selection {items}</p><br></br>

                <button onClick={HandlerOne}>go to Game page</button>
            </div>
        </div>
    </>
  );
}

export default LanguagePage;
