import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import { Title, Input, Button, Subtitle } from "../../components";
import { Context } from "../../Context";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goTo = useNavigate();

  // moves to dashboard after logging in
  const handleNavigate = () => {
    goTo("/dashboard"); // needs conditionally rendering using SQL database content
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleNavigate();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      };
      console.log("body:", options.body);
      const res = await fetch(
        "https://python-debug.herokuapp.com/register",
        options
      );
      const data = await res.json();
      console.log("Res:", data);

      return data;
    } catch (err) {
      console.log("Error :", err);
    }
  };

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
    <>
      <Title title="Flask & Furious" />
      <Subtitle subtitle="Register here" />
      <form onSubmit={handleSubmit}>
        <Input
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          name="username"
          id="username"
          type="text"
          text="Username"
          testRole="username"
        />
        <Input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          id="email"
          type="email"
          text="Email"
          testRole="email"
        />
        <Input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          name="password"
          id="password"
          type="password"
          text="Password"
          testRole="password"
        />
        <Button text="Register" />
      </form>
      Have an account? <Link to="/login">Login here</Link>
      {/* 
      <div>
        <Title>Insert App Name</Title>
        <form onSubmit={handleSubmit}>
            <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
            <Input type="text" name="email" onChange={(e)=>{ setEmail(e.target.value)}}>Email</Input>
            <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
            <Input type="password" name="confirm-password">Confirm Password</Input> (// don't use!!!)
            <Input type="submit" name="Register">Register</Input>
        </form>
      </div> 
     */}
    </>
  );
}

export default Register;
