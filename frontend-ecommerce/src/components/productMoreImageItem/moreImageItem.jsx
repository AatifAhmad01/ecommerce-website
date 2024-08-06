import React from "react";
import './moreImageItem.css'

export default function MoreImageItem({imageIndex, imageUrl, selectedIndex, onClick}){
    return <div className={`moreImageItemContainer ${selectedIndex == imageIndex ? "selectedMoreImageItem": ""}`} onClick={() => onClick(imageIndex)}>
        <img className="more-product-image" src={imageUrl} alt="" />
    </div>
}