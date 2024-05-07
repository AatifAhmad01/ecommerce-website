import React from "react";
import './categoryItem.css'
import image from '../../../public/images/products/image1.png'

export default function CategoryItem({onClick, imageUrl, text})
{
    return <div className="categoryItemContainer">
        <div className="categoryItemImageContainer" onClick={onClick}>
            <img src={imageUrl} alt="" />
        </div>
        <p>{text}</p>
    </div>
}