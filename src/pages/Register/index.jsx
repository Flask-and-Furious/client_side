import React, { useState } from "react";
import axios from 'axios'

import { Title, Input } from "../../components"

function Register() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
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
            const res = await fetch('https://python-debug.herokuapp.com/register', options)
            const data = await res.json()
            console.log("Res:", data)
            
            return data
            
        } catch (err) {
            console.log("Error :", err)
        }
    }
        
            

        



    

//     const body = {
//         username: data.username,
//         email: data.email,
//         password: data.password
//     }

//     const options = {
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(body)
//     }

//     try {
//         const res = await axios.post('https://python-debug.herokuapp.com/register', options)
//         const data = await res.json()
//         console.log(data)

//     } catch (err) {
//         console.log(err.response.data)
//     }

// }


    
    return (
        <div>
            <Title>Insert App Name</Title>
            <form onSubmit={handleSubmit}>
                <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
                <Input type="text" name="email" onChange={(e)=>{ setEmail(e.target.value)}}>Email</Input>
                <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
                {/* <Input type="password" name="confirm-password">Confirm Password</Input> */}
                <Input type="submit" name="Register">Register</Input>
            </form>
        </div>
    )
}

export default Register
