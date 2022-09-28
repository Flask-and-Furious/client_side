import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  const { user, setUser } = useContext(Context);
  const { score, setScore } = useContext(Context); // testing

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user) {
      navigateTo("/", { replace: true });
    }
  }, [user]);

  return (
    <>
    <div className="dashboard-container">
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`${user}'s Dashboard`} />
        <h5> Your Current Score : ⭐ {score} ⭐</h5>
      </div>
      <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>
    </div>

      {/* 
      <div>
        <Title>Debugging Challenge</Title>
        <p>Current Level: EASY</p>
      </div>

      <div>
        <Button />
      </div> */}
    </>
  );
}

export default DashboardPage;
