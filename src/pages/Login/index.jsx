import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import {
  Title,
  Input,
  Button,
  Subtitle,
  FlashMessage,
  Image,
} from "../../components";
import { Context } from "../../Context";
import login from "../../assets/virus.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { storedSessionUser, setStoredSessionUser } = useContext(Context);
  const { isValidUser, setIsValidUser } = useContext(Context);
  const { user, setUser } = useContext(Context);

  const goTo = useNavigate();

  // moves to dashboard after logging in
  const handleNavigate = () => {
    setUser(username);
    goTo("/dashboard");
  };

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
      const res = await fetch(
        "https://python-debug.herokuapp.com/login",
        options
      );
      const data = await res.json();

      // getting current user
      if (data[1] == "200") {
        localStorage.setItem("token", data[0]["token"]);

        setStoredSessionUser(localStorage.getItem("token"));

        setIsValidUser(true);

        handleNavigate();
      } else {
        setIsValidUser(false);
        console.log("Something went wrong!");
      }
      return data;
    } catch (err) {}
  };

  return (
    <>

        <div className="login-container">
            <div className="login-div">
                <div className="animation">
                    <Image image={login} altVal="article 1 image goes here" cssClass={"logoImg"} />
                </div>
                <Title title="Login" />
                <form onSubmit={handleSubmit}>
                    <Input onChange={(e) => {setUsername(e.target.value);}} name="username" type="text" testRole="username">Username</Input>
                    <Input onChange={(e) => {setPassword(e.target.value);}} name="password" type="password" min={8} max={20} testRole="password">Password</Input>
                    <Input type="submit" name="login" testRole="login">Submit</Input>
                </form>
                {isValidUser ? null : (
                    <FlashMessage text="Login failed. Please try again. " />
                )}
                <p>Don't have an account? <Link className="link-here" to="/register">Register here</Link></p>
            </div>
        </div>
  

    </>
  );
}

export default Login;
