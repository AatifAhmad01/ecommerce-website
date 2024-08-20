import React from "react";
import './categoryItem.css'

export default function CategoryItem({onClick, imageUrl, text})
{
    return <div className="categoryItemContainer">
            <div className="categoryItemImageContainer" onClick={onClick}>
                <img src={imageUrl} alt="" loading="lazy"/>
            </div>
            <p>{text}</p>
        </div>
}