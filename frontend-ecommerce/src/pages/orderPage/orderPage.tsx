import React, { useEffect } from "react";
import "./orderPage.css"
import ButtonFill from "../../components/buttonFill/addToCartBtn";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAllItems } from "../../redux/slices/cartSlice";


export default function OrderPage(){

    const dispatch = useDispatch();

    const navigation = useNavigate();

    const location = useLocation()

    const orderId = location.state.orderId

    const onShopMoreHandler = () => {
        navigation("/")
    }

    useEffect(() => {
        localStorage.setItem("cartItems", '{"items": []}');
        dispatch(removeAllItems());
    }, [])

    return <div className="orderContainer">
        <div className="orderFeedbackContainer">
            <h2 className="f-exo-600">Order Placed!</h2>
            <p className="f-exo-600">Thank You Our Valued Costumer.</p>
            <p className="f-exo-600">Your order No is {orderId}</p>
            <ButtonFill onClick={onShopMoreHandler}>{"Shop More"}</ButtonFill>
        </div>
    </div>
}