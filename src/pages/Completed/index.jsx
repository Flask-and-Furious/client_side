import React, { useContext, useEffect } from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function CompletedPage() {
  const { user, setUser } = useContext(Context);
  const { score, } = useContext(Context);
  const navigateTo = useNavigate();

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
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`Well Done ${user}!`} />
        <div>
          <br></br>
          <h5> Your Today's Score : ⭐ {score} ⭐</h5>
          <br></br>
        </div>

        <Button text="Go to Dashboard" handleClickEvent={handleDashboard} />
        <br></br>
      </div>
    </>
  );
}

export default CompletedPage;
