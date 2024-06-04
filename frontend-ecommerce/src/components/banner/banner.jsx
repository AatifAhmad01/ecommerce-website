import React from "react";
import './banner.css'

export default function Banner({imageUrl, onClick})
{
    return<div className="bannerContainer" onClick={onClick}>
        <img className="bannerImage" src={imageUrl} alt="" />
    </div>
}