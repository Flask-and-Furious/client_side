import React, { useContext ,useEffect} from "react";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";

function CompletedPage() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);

  const { user, setUser } = useContext(Context);
  const {score, setScore } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = () => {
    // remove the token and user from the session storage
   localStorage.removeItem("token")
   localStorage.clear()
   setUser("")
   
    navigateTo('/login');
  }

  useEffect(() => {
    if (!user) {
        navigateTo('/login', {replace: true});
    }
  }, [user]);
  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`Well Done ${user}!`} />
        <div><br></br>
   <h5> Your Today's Score : ⭐ {score} ⭐</h5>
    <br></br>
      </div>

        <Button text="Go to Dashboard" nextPage="/dashboard" />
        <br></br>
        <button  onClick={handleLogout}>logout</button>

      </div>

      {/* <div>Well Done!</div>

      <a href="/dashboard">Go to Dashboard</a> */}
    </>
  );
}

export default CompletedPage;
