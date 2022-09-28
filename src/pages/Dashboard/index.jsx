
import React, { useEffect, useContext } from "react";
import { useUserContext } from '../../Context';
import { Context } from "../../Context";
import { useNavigate } from 'react-router-dom';

import { Button, Subtitle, Title } from "../../components";

function DashboardPage() {

   const { storedSessionUser, setStoredSessionUser } = useContext(Context);
    const { user } = useUserContext();
    const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
        navigate('/login', {replace: true});
    }
}, [user]);
    return (<>
         <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle={`${storedSessionUser}'s Dashboard`} />
        <p>Current Level: EASY</p>
      </div>
        <div>
        <Button text="Let's Get Started" nextPage="/language" />
      </div>


     
    </>
  );
}

export default DashboardPage;
