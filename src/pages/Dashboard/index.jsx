import React, { useEffect } from "react";
import { useUserContext } from '../../Context';

import { useNavigate } from 'react-router-dom';

import { Button, Title } from "../../components";

function DashboardPage() {


    const { user } = useUserContext();
    const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
        navigate('/login', {replace: true});
    }
}, [user]);
    return (<>
        <div>
            <Title>Debugging Challenge</Title>
            <p>Current Level: EASY</p>
        </div>

          
        <div>
          <Button/>
        </div>
        </>

    )
}

export default DashboardPage