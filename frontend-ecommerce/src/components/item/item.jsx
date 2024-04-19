import React from "react";
import './item.css'

import itemImage from '../../assets/lipstick.jpg'

export default function Item()
{
    return(
        <div className="item-container">
            <img src={itemImage} className="item-image"/>
            <h3 className="item-heading">Rs.450</h3>
            <div className="buttons-container">
                <button className="add-cart-button">Add To Cart</button>
                <button className="favorite-button">O</button>
            </div>
        </div>
    )
}