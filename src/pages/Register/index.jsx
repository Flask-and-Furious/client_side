import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import { useUserContext } from '../../Context';

function Register() {
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const { register } = useUserContext();


  return (
    <>
    <div>
    
        <div>
          <h1 >Register</h1>
          <form 
            onSubmit={(e) => {
              e.preventDefault()
              register(username, email, password);
            }}
          >
            <input
              type="text"
              placeholder="Username"
             
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
            
            
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"

            
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
           
            <button>
              Create Account
            </button>
          </form>
        </div>
      
      </div>
    </>
  )
}

export default Register;
