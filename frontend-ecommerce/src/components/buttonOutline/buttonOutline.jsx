import React from "react";
import './buttonOutline.css'

export default function ButtonOutline({onClick, children, isDisabled}) {
    return <div className="buttons-container">
        <button className="buttonOutline" onClick={onClick} disabled={isDisabled}>{children}</button>
    </div>
}