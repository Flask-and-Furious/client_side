import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Subtitle, Title } from "../../components";
import { Context } from "../../Context";

function DashboardPage() {
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const { user, setUser } = useContext(Context);

  const navigateTo = useNavigate();

  useEffect(() => {
    if (!user) {
      navigateTo("/login", { replace: true });
    }
  }, [user]);

  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`${user}'s Dashboard`} />
      </div>

      <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>
    </>
  );
}

export default DashboardPage;
