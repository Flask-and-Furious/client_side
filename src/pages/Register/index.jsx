import React from "react";

import { Title, Input, Button } from "../../components";

function Register() {
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
          name="email"
          id="email"
          type="email"
          text="Email"
          testRole="email"
        />
        <Input
          name="password"
          id="password"
          type="password"
          text="Password"
          testRole="password"
        />
        <Input
          name="password"
          id="password"
          type="password"
          text="Confirm Password"
          testRole="confirm-password"
        />
        <Button text="Register" testRole="register" />
      </form>

      {/* <Title>Insert App Name</Title>
      <form>
          <Input type="text" name="username">Username</Input>
          <Input type="text" name="email">Email</Input>
          <Input type="password" name="password">Password</Input>
          <Input type="password" name="confirm-password">Confirm Password</Input>
          <Input type="submit" name="Register">Register</Input>
      </form> */}
    </div>
  );
}

export default Register;
