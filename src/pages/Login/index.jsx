import { useState } from 'react'

import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useUserContext } from '../../Context';

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()


  const { login } = useUserContext();
  const sub =()=>{
    navigate("/register");
}
 

  return (
    <div>


    




      <div >
        <h1 title='Login'> Login</h1>
        <form 
          onSubmit={(e) => {
            e.preventDefault()
            login(username, password)
          }}
        >
          <input
            type="username"
            placeholder="Username"
          
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
           
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
         
              <button onClick={sub}>go to Register</button>
          
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
