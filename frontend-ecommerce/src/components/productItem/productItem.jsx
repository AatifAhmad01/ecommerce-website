import React from "react";
import './productItem.css'

import itemImage from '../../../public/images/products/lipstick.jpg'

export default function ProductItem({product})
{
    return(
        <div className="item-container">
            <img src={`../../../public/images/products/${product.imageUrl}.jpg`} className="item-image"/>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <div className="buttons-container">
                <button className="add-cart-button">Add To Cart</button>
                {/* <button className="favorite-button"> </button> */}
                {/* <span class="material-symbols-rounded add-icon">favorite</span> */}
            </div>
        </div>
    )
}