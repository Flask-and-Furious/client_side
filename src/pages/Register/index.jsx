import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Title, Input, Image } from "../../components"
import login from "../../assets/virus.png"
import { Context } from "../../Context";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const goTo = useNavigate();

  // moves to dashboard after logging in
  const handleNavigate = () => {
    goTo("/login");
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

    return (
        <div className="register-container">
            <div className="login-div">
                <div className="animation">
                    <Image image={login} altVal="article 1 image goes here" cssClass={"logoImg"} />
                </div>
                <Title title="Sign up to Bug Basher" cssClass="login-title"></Title>
                <form onSubmit={handleSubmit}>
                    <Input type="text" name="username" onChange={(e)=>{ setUsername(e.target.value)}}>Username</Input>
                    <Input type="email" name="email" onChange={(e)=>{ setEmail(e.target.value)}}>Email</Input>
                    <Input type="password" min={8} max={20} name="password" onChange={(e)=>{ setPassword(e.target.value)}}>Password</Input>
                    <Input type="submit" name="register">Register</Input>
                </form>
                <p>Have an account? <Link to="/login">Login here</Link></p>
            </div>
        </div>
    )
}

export default Register;
