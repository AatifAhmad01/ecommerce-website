import React from "react";
import "./paragraphText.css"

export default function ParagraphText({label, children}) 
{
    return <>
    {
        label ? <label htmlFor="">{label}</label> : null
    }
    {
        children ? <p className="paragraph-text">{children}</p> : null
    }
    </>
}