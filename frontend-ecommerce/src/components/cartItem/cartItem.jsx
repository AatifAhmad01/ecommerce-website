import React from "react";
import './cartItem.css'
import itemImage from '../../../public/images/products/bottle1.png'

export default function CartItem({onRemove, cartItem})
{




    return <div className="cartItemContainer">
                <div className="cartItemDetailsOuterContainer">
                <div className="removeButtonContainer">
                    <button className="quantityBtn" onClick={() => onRemove(cartItem.id)}>X</button>
                </div>
                <img src={itemImage} alt="" className="cartItemImage"/>
                <div className="cartItemDetailsContainer">
                    <p className="cartItemTitle">{cartItem.name}</p>
                    <p>Price: {cartItem.price}</p>
                </div>
            </div>
            <div className="cartItemTotalPriceContainer">
                <p>Total Price: {cartItem.price}</p>
            </div>
            <div className="cartItemQuantityContainer">
                <div className="quantityContainer">
                    <button className="quantityBtn">-</button>
                    <input  name="" id="" className="quantityInput" />
                    <button className="quantityBtn" >+</button>
                </div>
            </div>

    </div>
}