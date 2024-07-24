import React from "react";
import './buttonOutline.css'
import ButtonText from "../buttonText/buttonText";

export default function ButtonOutline({onClick, children, isDisabled}) {
    return <div className="buttons-container">
        <button className="buttonOutline" onClick={onClick} disabled={isDisabled}>{<ButtonText>{children}</ButtonText>}</button>
    </div>
}