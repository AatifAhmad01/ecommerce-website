import React from "react";
import './buttonText.css'

export default function ButtonText({children, visibility})
{
    return <p className="button-inner-text">{children}</p>
}