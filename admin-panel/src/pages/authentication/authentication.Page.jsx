import React, { useContext, useState } from "react";
import './authentication.Page.css'
import { userLogin } from "../../https/user.https";
import { UserContext } from "../../contexts/UserContext";
import { CircularProgress } from "@mui/material";

export default function AuthenticationPage()
{
    const [userValues, setUserValues] = useState({})
    const [response, setResponse] = useState("  ");
    const [request, setRequest] = useState(false)
    const userContext = useContext(UserContext);

    const onChangeText = (e) => {
        setUserValues({...userValues, [e.target.name]: e.target.value })
    }

    const onLoginHandler = async (event) => {
        event.preventDefault();

        try
        {
            setRequest(true)
            const loginRes = await userLogin(userValues.username, userValues.password)
            userContext.onLogin(loginRes.data.data)
            setRequest(false)

        }
        catch(error)
        {
            setResponse(error.response.data.message)
            setRequest(false)
        }
    }

    return <div className="authentication-page">
            <h1 className="welcome-text">Welcome to SeenBeauty</h1>
            <h1 className="login-text">Login</h1>
            <form method="POST" className="auth-form">

                <input type="text" 
                    name="username" id="usernameField" 
                    placeholder="Username" 
                    className="authentication-input" 
                    autoComplete="username"
                    onChange={onChangeText}/>
                
                <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    className="authentication-input" 
                    autoComplete="current-password"
                    onChange={onChangeText}/>

                <p className="response-text">{response}</p>

                <button className='primary-button' type="action" onClick={onLoginHandler}>
                    {request ? <CircularProgress color='inherit' size={20}/> : "Login"}
                </button>

            </form>
    </div>
}