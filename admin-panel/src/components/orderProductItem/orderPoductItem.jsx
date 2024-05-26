import React from "react";
import './orderProductItem.css'

export default function OrderProductItem() 
{
    return <div className="order-product-item-container">
        <img className="order-product-item-image" src="https://seenbeauty.pk/public/images/images-1716546302298-606322979.jpg" alt="" />
        <h3 className="order-product-item-name">Product Name new name</h3>
        <h3 className="order-product-item-quantity-text">Quantity</h3>
        <h3 className="order-product-item-quantity">3</h3>
        <input className="order-product-item-checkbox" type="checkbox" name="" id="" />
    </div>
}