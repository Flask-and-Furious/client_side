import React, { useState } from "react";

import { Title, Input, Image } from "../../components"
import login from "../../assets/shortcut-script-app.png"

function Login() {


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
            console.log("body:", options.body)
            const res = await fetch('https://python-debug.herokuapp.com/login', options)
            const data = await res.json()
            console.log("Res:", data)
            
            return data
            
        } catch (err) {
            console.log("Error :", err)
        }

    }

    return (
        <div className="login-container">
            <div className="login-div">
                <Image image={login} altVal="article 1 image goes here" cssClass={"logoImg"} />
                <Title title="Welcome to Bug Basher" cssClass="login-title"></Title>
                <form onSubmit={handleSubmit}>
                    <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
                    <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
                    <Input type="submit" name="login">Login</Input>
                </form>
            </div>
        </div>
    )
}

export default Login
