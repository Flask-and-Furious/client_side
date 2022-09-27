import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import { Title, Input, Button, Subtitle, FlashMessage } from "../../components";
import { Context } from "../../Context";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const { isValidUser, setIsValidUser } = useContext(Context);

  const goTo = useNavigate();

  // moves to dashboard after logging in
  const handleNavigate = () => {
    // setStoredSessionUser(username); // needs to come from SQL database
    goTo("/dashboard"); // needs conditionally rendering using SQL database content
  };

  let errorMessage;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      };
      console.log("body here ==> ", options.body);
      const res = await fetch(
        "https://python-debug.herokuapp.com/login",
        options
      );
      const data = await res.json();
      console.log("Res:", data);

      // getting current user
      if (data[1] === 200) {
        localStorage.setItem("token", data[0]["token"]);
        const currentSessionUser = localStorage.getItem("token");
        setStoredSessionUser(currentSessionUser);
        setIsValidUser(true);
        handleNavigate();
      } else {
        setIsValidUser(false);
        console.log("PANIC!!!");
      }

      return data;
    } catch (err) {
      console.log("Error :", err);
    }
  };
  console.log("isValidUser ==> ", isValidUser);

  return (
    <>
      <div>
        <Title title="Flask & Furious" />
        <Subtitle subtitle="Login here" />
        <form onSubmit={handleSubmit}>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            name="username"
            id="username"
            type="text"
            text="Username"
          />
          <Input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            name="password"
            id="password"
            type="password"
            text="Password"
          />
          <Button text="Login" />
        </form>
        {isValidUser ? null : (
          <FlashMessage text="Login failed. Please try again. " />
        )}
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>

      {/* <div>
        <Title>Insert App Name</Title>
        <form onSubmit={handleSubmit}>
            <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
            <Input type="password" name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
            <Input type="submit" name="login">Login</Input>
        </form>        
      </div> */}
    </>
  );
}

export default Login;
