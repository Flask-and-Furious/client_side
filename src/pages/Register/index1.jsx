import React, { useState } from "react"
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from "react-router-dom"

import { Title, Input } from "../../components"

function Register() {

    const { handleSubmit, reset } = useForm()
    const [ show, setShow ] = useState(false)
    const [ ServerResponse, setServerResponse ] = useState('')

    const navigate=useNavigate()
    const sub =()=>{
        navigate("/login");
    }
    const submitForm = async (data) => {

        const body = {
            username: data.username,
            email: data.email,
            password: data.password
        }

        const options = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        }

        
        try {
            const userResult = await axios.request(
              'https://python-debug.herokuapp.com/register', options
            );
            const data = await userResult.json();
            setServerResponse(data.message);
            setShow(true);
          
          } catch (error) {
            console.log(error)
          }

        reset()
    }

    return (
        <div>
            <Title>Insert App Name</Title>
            <form onSubmit={handleSubmit(submitForm)}>
                <Input type="text" name="username">Username</Input>
                <Input type="text" name="email">Email</Input>
                <Input type="password" name="password">Password</Input>
                <Input type="submit" name="Register">Register</Input>
                <button type="button" onClick={sub} >go to login</button>
              
            </form>
          
        </div>
    )
}

export default Register
