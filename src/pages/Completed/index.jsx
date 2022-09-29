import React, { useContext, useEffect } from "react";

import { Button, Subtitle, Title, Image } from "../../components";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import py from "../../assets/py.png"
import js from "../../assets/js.png"

function CompletedPage() {
  const { user, setUser } = useContext(Context);
  const { score, } = useContext(Context);
  const navigateTo = useNavigate();
  const { jsScore, setJsScore } = useContext(Context);
  const { pythonScore, setPythonScore } = useContext(Context);

  const handleLogout = () => {
    // remove the token and user from the session storage
    localStorage.removeItem("token");
    localStorage.clear();
    setUser("");

    navigateTo("/");
  };

  const handleDashboard = () => {
  
    navigateTo("/dashboard");
  };

  useEffect(() => {
    if (!user) {
      navigateTo("/", { replace: true });
    }
  }, [user]);
  return (
    <>
      <div className="completed-container">
        <Title title="Well Done" cssClass={"compl-title"}/>
        <Subtitle cssClass={"compl-subtitle"} subtitle={`${user.charAt(0).toUpperCase() + user.slice(1)}!`} />
        <div className="compl-cont">
          <br></br>
          <div className="compl-div">
          <Image image={py} altVal="python" cssClass={"img-compl"} /> <h5>Today's Score :   {pythonScore} </h5>
          </div>
          <br></br>
          <div className="compl-div">
          <Image image={js} altVal="javascript logo" cssClass={"img-compl"} /> <h5 className="js-h5">Today's Score :   {jsScore} </h5>
        </div>
        </div>

        <Button text="Go to Dashboard" handleClickEvent={handleDashboard} cssClass={"play-2"} />
        <br></br>
      </div>
    </>
  );
}

export default CompletedPage;
