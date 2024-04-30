import React from "react";
import './addToCartBtn.css'

export default function ButtonFill({text, onClick})
{
    return  <div className="buttons-container">
            <button className="add-cart-button" onClick={onClick}>{text}</button>
            {/* <button className="favorite-button"> </button> */}
            {/* <span class="material-symbols-rounded add-icon">favorite</span> */}
        </div>
}