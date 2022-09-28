import React, { useState } from "react";
import axios from 'axios'

import { Title, Input } from "../../components"
import { redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Login() {


    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate=useNavigate()
   
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body : JSON.stringify(Object.fromEntries(new FormData(e.target)))


                
            }
            console.log("body:", options.body)
            const res = await fetch('https://python-debug.herokuapp.com/login', options)
            if(!res.ok) throw Error("There was a problem in the login request")

            const data = await res.json()
            
            localStorage.setItem("jwt-token", data.token);


            console.log("Res data:", data)
            console.log("t:", data.token)
           
           
            if(data[1]!="failed"){
                navigate("/")
            }
            
        } catch (err) {
            console.log("Error :", err)
        }

    }

    return (
        <div>
            <Title>Insert App Name</Title>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username here</Input>
                <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password here</Input>
                <Input type="submit" name="login">Login</Input>
            </form>
        </div>
    )
}

export default Login
