import React from "react";
import './socialIcon.css'

export function SocialMediaLink ({children, onClick}){

    return <div className="socialIconContainer" onClick={onClick}>
        {children}
    </div>
}