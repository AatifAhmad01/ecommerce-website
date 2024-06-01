import React from "react";
import './orderSummeryItem.css'

export default function OrderSummeryItem({itemDetails})
{


    return <div className="order-summery-item-container">
        <div className="order-summery-item-image-container">
            <img className="order-summery-item-image" src={`https:/seenbeauty.pk/${itemDetails.image_url}`} alt="" />
            <p className="order-summer-item-quantity">{8}</p>
        </div>
        <div className="order-summery-item-details-container">
            <p className="order-summer-item-name">{itemDetails.name}</p>
            <p className="order-summer-item-description">{itemDetails.description}</p>
        </div>
    </div>
}