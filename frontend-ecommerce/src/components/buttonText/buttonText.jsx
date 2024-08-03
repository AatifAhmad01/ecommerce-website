import React from "react";
import './buttonText.css'

export default function ButtonText({children})
{
    return <p className="button-inner-text">{children}</p>
}