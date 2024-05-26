import React, { useContext, useState } from "react";
import './authentication.Page.css'
import PrimaryButton from "../../components/primaryButton/primaryButton";
import { userLogin } from "../../https/user.https";
import { UserContext } from "../../contexts/UserContext";

export default function AuthenticationPage()
{
    const [userValues, setUserValues] = useState({})
    const [response, setResponse] = useState("  ");
    const userContext = useContext(UserContext);

    const onChangeText = (e) => {
        setUserValues({...userValues, [e.target.name]: e.target.value })
    }

    const onLoginHandler = async () => {
        try
        {
            const loginRes = await userLogin(userValues.username, userValues.password)
            userContext.onLogin(loginRes.data.data)
        }
        catch(error)
        {
            setResponse("Usernam ya Password ghalat de!")
        }
    }

    return <div className="authentication-page">
            <h1 className="login-text">Login</h1>
            <form action="">

                <input type="text" 
                    name="username" id="usernameField" 
                    placeholder="Username" 
                    className="authentication-input" 
                    autoComplete="username"
                    onBlur={onChangeText}/>
                
                <br/>

                <input type="password" 
                    name="password" 
                    id="passwordField" 
                    placeholder="Password" 
                    className="authentication-input" 
                    autoComplete="current-password"
                    onBlur={onChangeText}/>
            </form>
            <p className="response-text">{response}</p>
            <PrimaryButton onClick={onLoginHandler}>Login</PrimaryButton>
    </div>
}