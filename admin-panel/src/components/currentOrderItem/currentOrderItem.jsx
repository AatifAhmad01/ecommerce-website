import React from "react";
import './currentOrderItem.css'

export default function CurrentOrderItem({onClick, orderDetails })
{
    return <div className="current-order-item-container" 
            onClick={() => onClick(orderDetails)}>

        <div className="order-item-details-container">
            <p className="order-item-id">432</p>
            <h3 className="order-item-name">Samina Iqbal</h3>
        </div>
    </div>
}