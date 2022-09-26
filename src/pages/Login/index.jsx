import React from "react";

import { Title, Input, Button } from "../../components";

function Login() {
  return (
    <div>
      <Title title="Flask & Furious" />
      <form>
        <Input
          name="username"
          id="username"
          type="text"
          text="Username"
          testRole="username"
        />
        <Input
          name="password"
          id="password"
          type="password"
          text="Password"
          testRole="password"
        />
        <Button text="Login" testRole="login" />
      </form>

      {/* <Title>Insert App Name</Title>
      <form>
        <Input type="text" name="username">Username</Input>
        <Input type="password" name="password">Password</Input>
        <Input type="submit" name="login">Login</Input>
      </form> */}
    </div>
  );
}

export default Login;
