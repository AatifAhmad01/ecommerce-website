import React from "react";
import './formStaticInput.css'

export default function FormStaticInput({mainText, secondaryText})
{
    return <div className="form-static-input-container">
        <p className="form-static-input-primary-text">{mainText}</p>
        <p className="form-static-input-secondary-text">{secondaryText}</p>
    </div>
}