import React from "react";

import { Title, Input } from "../../components"

function Login() {
    return (
        <div>
            <Title>Insert App Name</Title>
            <form>
                <Input type="text" name="username">Username</Input>
                <Input type="password" name="password">Password</Input>
                <Input type="submit" name="login">Login</Input>
            </form>
        </div>
    )
}

export default Login