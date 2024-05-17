import React from "react";
import ButtonFill from "../buttonFill/addToCartBtn";
export default function OrderSummery({subtotal, onClickAction, actionText, showAction = true })
{
    const deliveryCharges = 200;

    return <div className="productDetailsSection p-4">
        <div className="detailContainer">
            <div className="space-between">
                <div className="cont-1">
                    <div className="textGroupContainer">
                        <h5>SUBTOTAL</h5>
                        <h5>Rs. {subtotal}</h5>
                    </div>
                    <div className="textGroupContainer">
                        <p>Delivery Charges</p>
                        <p>{subtotal < 1500 ? deliveryCharges : "Free"}</p>
                    </div>
                </div>
                <div className="textGroupContainer">
                    <h5>TOTAL TO PAY</h5>
                    <h5>Rs. {subtotal < 1500 ? subtotal + deliveryCharges : subtotal}</h5>
                </div>
            </div>
        </div>

        { showAction ? <ButtonFill onClick={onClickAction}>{actionText}</ButtonFill> : null }
    </div>
}