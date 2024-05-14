import React, { useEffect, useState } from "react";
import './cart.css'
import ButtonFill from "../../components/buttonFill/addToCartBtn";
import CartItem from "../../components/cartItem/cartItem"

import { removeItem } from "../../redux/slices/cartSlice";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Cart() {

    const [subtotal, setSubtotal] = useState(0);

    const dispatch = useDispatch();


    const selector = useSelector(state => state.cart)

    const checkOutHandler = () => {

    }

    const onRemoveItem = (itemId) => {
        dispatch(removeItem(itemId))

        // calculateTotal();
    }

    const onItemQuantityChanged = (itemId, updatedQuantity) => {

        // const updatedItems = cart.items.map(item => {

        //     if(item.id == itemId)
        //     {
        //         item.quantity = updatedQuantity;
        //     }
        //     return item;
        // })

        // setCart({items: [...updatedItems]})

        // calculateTotal();
    }

    const calculateTotal = () => {
        // setSubtotal(cart.items.reduce((acc, curr) => 
        // {
        //     return acc + curr.price * curr.quantity;
        // }, 0));
    }

    useEffect(() => {
        console.log(selector.items)
    }, [])

    return<>
        <div className="cartDetailsContainer">
            <div className="cartItemsContainer">
            {
                selector.items.map((item) => <CartItem cartItem={item} onUpdateQuantity={onItemQuantityChanged} onRemove={onRemoveItem} key={item.id}/>)
            }
            </div>
            <div className="productDetailsSection p-4">
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
                        </div>
                        <div className="textGroupContainer">
                            <h5>TOTAL TO PAY</h5>
                            <h5>Rs. {subtotal}</h5>
                        </div>
                    </div>
                </div>

                {/* <AddToCartBtn onClick={addCartHandler}/> */}
                <ButtonFill onClick={checkOutHandler}>{"Check Out"}</ButtonFill>
            </div>
        </div>
    </>
}