import React, { useEffect, useState } from "react";
import './cart.css'

import CartItem from "../../components/cartItem/cartItem"
import { useNavigate } from "react-router-dom";
import { updateItem, removeItem } from "../../redux/slices/cartSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ButtonFill from "../../components/buttonFill/addToCartBtn";

export default function Cart() {

    const [subtotal, setSubtotal] = useState(0);
    const [coupon, setCoupon] = useState("");
    const [couponResponse, setCouponResponse] = useState("");

    const navigate = useNavigate();
    
    const selector = useSelector(state => state.cart)
    const dispatch = useDispatch();
    
    const checkOutHandler = () => {

        localStorage.setItem("isBuying", false)
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

    const onEnterCoupon = (e) => {
        setCoupon(e.target.value)
    }

    const onApplyCoupon = () => {
        setCoupon("")
        setCouponResponse("Invalid coupon code.")
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
                selector.items?.length ? <div className="order-details-container" style={{height: "300px"}}>
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
                                </div>
                                {/* <div className="textGroupContainer">
                                    <input type="text" className="coupon-input" placeholder="Enter coupon code." value={coupon} onChange={onEnterCoupon}/>
                                    <button className="coupon-apply-btn" onClick={onApplyCoupon}>Apply</button>
                                </div> */}
                                <div className="textGroupContainer">
                                    <p className="coupon-response-text">{couponResponse}</p>
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