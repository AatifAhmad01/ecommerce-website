import React from "react";
import './buttonOutline.css'

export default function ButtonOutline({onClick, children}) {
    return <div className="buttons-container">
        <button className="buttonOutline" onClick={onClick}>{children}</button>
    </div>
}