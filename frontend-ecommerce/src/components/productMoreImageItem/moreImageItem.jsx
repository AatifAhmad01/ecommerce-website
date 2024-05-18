import React from "react";
import './moreImageItem.css'

export default function MoreImageItem({imageIndex, imageName, selectedIndex, onClick}){
    return <div className={`moreImageItemContainer ${selectedIndex == imageIndex ? "selectedMoreImageItem": ""}`} onClick={() => onClick(imageIndex)}>
        <img src={`/images/products/${imageName}.png`} alt="" />
    </div>
}