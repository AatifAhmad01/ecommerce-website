import React from "react";
import "./paragraphText.css"

export default function ParagraphText({label, children}) 
{
    return <>
    {
        label ? <label htmlFor="" className="paragraph-text-label">{label}</label> : null
    }
    <p className="paragraph-text">{children}</p>
    </>
}