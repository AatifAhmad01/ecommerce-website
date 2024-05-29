import React from "react";

export default function ResponseText({text})
{
    return<>
    { text ? <p className="response-text">{text}</p> : null }
    </> 
}