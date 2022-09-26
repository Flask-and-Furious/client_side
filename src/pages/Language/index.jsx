import React, { useContext, useState } from "react";

import { Button, Option, Subtitle, Title } from "../../components";
import Game from "../Game";
import { useNavigate } from "react-router-dom";

import { Context } from "../../Context";

function LanguagePage() {

  const [state, setstate] = useState({data:""})
  const [mylanguage, setLanguage] = useState("")

   const navigate = useNavigate();
    const { items, setItems } = useContext(Context);

  const handleChange = event => {
    console.log('Label 👉️', event.target.selectedOptions[0].label);
    console.log(event.target.value);
    setLanguage(event.target.value);
  };
  
  console.log( "- lans")
  const changeState = (e) => {  
    setstate({data:e.target.value}); 
   }; 


      
    const clickHandler = (e) => {
      
        setItems(e.targe.value );
        console.log("my val - "+ e.target.value)

    };
      /*
    const clickHandlerOne = () => {
        setItems((prevcount) => prevcount - 1);
    };*/
      
    const HandlerOne = () => {
        navigate("/game");
    };
  return (
    <>
    
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Choose language" />
      <Option
        topic="JavaScript"
        text="Which line number is wrong?"
        attributeName="javascript"
      />
      <Option
        topic="Python"
        text="Which line number is wrong?"
        attributeName="python"
      />
            <select value={items} onChange={clickHandler}>
        <option value="python" onChange={clickHandler}>python </option>
        <option value="javascript" onChange={clickHandler}>javascript</option>
      
      </select>

      <Button text="Submit"  onSubmit={() => changeState()}/>

       
    
               

            <button onSubmit={clickHandler}>submit now</button>
            language:{items}
            <div>
                <button onClick={HandlerOne}>Move to Page Two</button>
            </div>
       

    </>
  );
}

export default LanguagePage;
