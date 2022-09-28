import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  const { user, setUser } = useContext(Context);
  const { score, setScore } = useContext(Context); // testing
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
  }

  return (
    <>
    <div className="dashboard-container">
      <div>
        <Title title="Bug Basher" />
        <Subtitle subtitle={`${user}'s Dashboard`} />
        <h5> Your Total Score : ⭐ {score} ⭐</h5>
        {console.log('mintime maxtime on dashboard: ', minTime, maxTime)}
        <h5 style={{display: minTime === Infinity ? 'none' : 'block'}}> 🐇 Quickest debugging completed in: {minTime} s</h5>
        <h5 style={{display: maxTime === -Infinity ? 'none' : 'block'}}> 🐢 Slowest debugging completed in: {maxTime} s</h5>
      </div>
      <div>
        <Button text="Let's Get Started" handleClickEvent={handleClick} />
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
