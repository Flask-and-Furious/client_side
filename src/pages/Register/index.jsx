import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { Title, Input, Image } from "../../components";
import login from "../../assets/virus.png";
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
      const res = await fetch(
        "https://python-debug.herokuapp.com/register",
        options
      );
      const data = await res.json();

      return data;
    } catch (err) {}
  };

  return (
    <>
      <div className="register-container">
        <div className="login-div">
          <div className="animation">
            <Image
              image={login}
              altVal="article 1 image goes here"
              cssClass={"logoImg"}
            />
          </div>
          <Title title="Sign up to Bug Basher" cssClass="login-title"></Title>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            >
              Username
            </Input>
            <Input
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            >
              Email
            </Input>
            <Input
              type="password"
              min={8}
              max={20}
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            >
              Password
            </Input>
            <Input type="submit" name="register">
              Register
            </Input>
          </form>
          <p className="p-login">
            Have an account?{" "}
            <Link className="link-here" to="/login">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
