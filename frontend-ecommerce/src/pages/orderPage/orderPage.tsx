import React, { useEffect } from "react";
import "./orderPage.css"
import ButtonFill from "../../components/buttonFill/addToCartBtn";
import { useNavigate } from "react-router-dom";

export default function OrderPage(){

    const navigation = useNavigate();

    const onShopMoreHandler = () => {
        navigation("/")
    }

    useEffect(() => {
        localStorage.setItem("cartItems", "{items: []}")
    }, [])

    return <div className="orderContainer">
        <div className="orderFeedbackContainer">
            <h2>Order Placed!</h2>
            <p>Thank you our valued costumer.</p>
            <p>your order No is {"5011"}</p>
            <ButtonFill onClick={onShopMoreHandler} >{"Shop More"}</ButtonFill>
        </div>
    </div>
}