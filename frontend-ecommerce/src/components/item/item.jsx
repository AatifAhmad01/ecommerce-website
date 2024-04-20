import React from "react";
import './item.css'

import itemImage from '../../assets/lipstick.jpg'

export default function Item()
{
    return(
        <div className="item-container">
            <img src={itemImage} className="item-image"/>
            <h4 className="item-heading">Red Lady Lipstick</h4>
            <h4 className="item-heading">Rs. 450</h4>
            <div className="buttons-container">
                <button className="add-cart-button">Add To Cart</button>
                <button className="favorite-button">O</button>
            </div>
        </div>
    )
}