import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

import { Title, Input } from "../../components"

function Login() {

    
    const navTo = useNavigate() 

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
            
            const res = await fetch('https://python-debug.herokuapp.com/login', options)
            const data = await res.json()
            console.log("Res:", data)

            if (data[1] == "200") {
                localStorage.setItem("token", data[0]["token"])
                navTo("/dashboard")
            } else if (data[1] == "401"){
                
                console.log("Username or Password is incorrect!")
            } else {
                console.log("Server error!")
            }
           
            
        } catch (err) {
            console.log("Error :", err)
        }

    }
    {navTo("/dashboard") ? null : <p>Username Wrong</p>} 
    return (
        <div>
            <Title>Insert App Name</Title>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
                <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
                <Input type="submit" name="login">Login</Input>
            </form>
        </div>
    )
}

export default Login
