import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Subtitle, Title, Progress } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  const { user, setUser } = useContext(Context);
  const { jsScore, setJsScore } = useContext(Context);
  const { pythonScore, setPythonScore } = useContext(Context);
  const { codeLanguage, setCodeLanguage } = useContext(Context); // testing
  const { minTime, } = useContext(Context); // save the time of the quickest debugging task
  const { maxTime, } = useContext(Context); // save the time of the longest debugging task  
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user) {
      navigateTo("/", { replace: true });
    }
  }, [user]);

  function handleClick() {
    navigateTo('/language')
    // console.log(jsScore)
    // console.log(pythonScore)
    // console.log(pythonGoal)
    // console.log(jsGoal)
  }

  return (
    <>
      <div className="dashboard-title">
        <Subtitle subtitle={`${user.charAt(0).toUpperCase() + user.slice(1)}'s progress`} />
      </div>
      
      <Progress progress={jsScore} language={"Javascript"}/>
      <Progress progress={pythonScore} language={"Python"}/>
      <h5 style={{display: minTime === Infinity ? 'none' : 'block'}}> 🐇 Quickest debugging completed in: {minTime} s</h5>
      <h5 style={{display: maxTime === -Infinity ? 'none' : 'block'}}> 🐢 Slowest debugging completed in: {maxTime} s</h5>    

      <div className="dashboard-container">
        <div>
          <Button text="Let's Get Started" handleClickEvent={handleClick} cssClass={"play"}/>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;
