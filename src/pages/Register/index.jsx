import React from "react";

import { Title, Input } from "../../components"

function Register() {
    return (
        <div>
            <Title>Insert App Name</Title>
            <form>
                <Input type="text" name="username">Username</Input>
                <Input type="text" name="email">Email</Input>
                <Input type="password" name="password">Password</Input>
                <Input type="password" name="confirm-password">Confirm Password</Input>
                <Input type="submit" name="Register">Register</Input>
            </form>
        </div>
    )
}

export default Register