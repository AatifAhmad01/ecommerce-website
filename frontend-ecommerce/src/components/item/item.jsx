import React from "react";
import './item.css'

import itemImage from '../../assets/lipstick.jpg'

export default function Item()
{
    return(
        <div className="item-container">
            <img src={itemImage} className="item-image"/>
            <h6 className="item-title">Red Lady Lipstick</h6>
            <h6 className="item-price">Rs. 450</h6>
            <div className="buttons-container">
                <button className="add-cart-button">Add To Cart</button>
                {/* <button className="favorite-button"> </button> */}
                {/* <span class="material-symbols-rounded add-icon">favorite</span> */}
            </div>
        </div>
    )
}