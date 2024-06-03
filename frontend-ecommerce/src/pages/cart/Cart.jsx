import React, { useEffect, useState } from "react";
import './cart.css'

import CartItem from "../../components/cartItem/cartItem"
import { useNavigate } from "react-router-dom";
import { updateItem, removeItem } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import OrderSummery from "../../components/orderSummery/orderSummery";
import ButtonFill from "../../components/buttonFill/addToCartBtn";

export default function Cart() {

    const [subtotal, setSubtotal] = useState(0);

    const navigate = useNavigate();
    
    const selector = useSelector(state => state.cart)
    const dispatch = useDispatch();
    
    const checkOutHandler = () => {
        navigate("/checkout", { state: null })
    }

    const onRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))
    }

    const onItemQuantityChanged = (itemId, updatedQuantity) => {

        dispatch(updateItem({id: itemId, quantity: updatedQuantity}))
    }

    const calculateTotal = () => {
        setSubtotal(selector.items.reduce((acc, curr) => 
        {
            return acc + curr.price * curr.quantity;
        }, 0));
    }

    useEffect(() => {
        calculateTotal();

    }, [selector])

    return<>
        <div className="cartDetailsContainer">
            <div className="cartItemsContainer">
            {
                selector.items?.map((item) => <CartItem cartItem={item} onUpdateQuantity={onItemQuantityChanged} onRemove={onRemoveItem} key={item.id}/>)
            }
            {
                selector.items?.length ? null: <p className="noItemsCartText">No Items In Cart</p>
            }
            </div>
            {
                // selector.items?.length ? <OrderSummery subtotal={subtotal} onClickAction={checkOutHandler} actionText={"Checkout"} showAction={true}/> : null

                selector.items?.length ? <div className="productDetailsSection" style={{height: "500px"}}>
                    <div className="detailContainer">
                        <div className="space-between">
                            <div className="cont-1">
                                <div className="textGroupContainer">
                                    <h5>SUBTOTAL</h5>
                                    <h5>Rs. {subtotal}</h5>
                                </div>
                                <div className="textGroupContainer">
                                    <p>Delivery Charges</p>
                                    <p>Free</p>
                                    {/* <p>{subtotal < 1500 ? deliveryCharges : "Free"}</p> */}
                                </div>
                            </div>
                            <div className="textGroupContainer">
                                <h5>TOTAL TO PAY</h5>
                                <h5>Rs. {subtotal}</h5>
                            </div>
                        </div>
                    </div>
        
                <ButtonFill onClick={checkOutHandler}>{"Checkout"}</ButtonFill>
            </div> : null
            }
        </div>
    </>
}