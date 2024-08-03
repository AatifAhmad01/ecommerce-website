import React from "react";
import ButtonFill from "../buttonFill/addToCartBtn";
import OrderSummeryItem from "../orderSummeryItem/orderSummerItem";
import './orderSummery.css'
export default function OrderSummery({subtotal, orderItems, onClickAction, actionText, showAction = true })
{
    // const deliveryCharges = 200;

    return <div className="order-summery-container">
        {
            orderItems ? orderItems.map(item => <OrderSummeryItem key={item.id} itemDetails={item}/>) : null
        }
        <div className="detailContainer">
            <div className="space-between">
                <div className="cont-1">
                    <div className="textGroupContainer">
                        <h5 className="f-exo-600">SUBTOTAL</h5>
                        <h5 className="f-times-bold">Rs. {subtotal}</h5>
                    </div>
                    <div className="textGroupContainer">
                        <p className="f-exo-600">Delivery Charges</p>
                        <p className="f-exo-600">Free</p>
                    </div>
                </div>
                <div className="textGroupContainer">
                    <h5 className="f-exo-600">TOTAL TO PAY</h5>
                    <h5 className="f-times-bold">Rs. {subtotal}</h5>
                </div>
            </div>
        </div>

        { showAction ? <ButtonFill onClick={onClickAction}>{actionText}</ButtonFill> : null }
    </div>
}