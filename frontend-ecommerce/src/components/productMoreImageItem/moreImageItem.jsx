import React from "react";
import './moreImageItem.css'

export default function MoreImageItem({imageIndex, imageName, onClick}){
    return <div className="moreImageItemContainer" onClick={() => onClick(imageIndex)}>
        <img src={`../../../public/images/products/${imageName}.png`} alt="" />
    </div>
}