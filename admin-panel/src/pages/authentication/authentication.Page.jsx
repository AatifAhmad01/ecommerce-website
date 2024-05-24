import React from "react";
import './authentication.Page.css'
import PrimaryButton from "../../components/primaryButton/primaryButton";

export default function AuthenticationPage()
{
    return <div className="authentication-page">
            <h1 className="login-text">Login</h1>
            <input type="text" name="" id="usernameField" placeholder="Username" className="authentication-input"/>
            <input type="password" name="" id="passwordField" placeholder="Password" className="authentication-input"/>
            <PrimaryButton>Login</PrimaryButton>
    </div>
}