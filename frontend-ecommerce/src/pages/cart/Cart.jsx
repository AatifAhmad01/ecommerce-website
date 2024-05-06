import React, { useEffect, useState } from "react";
import './cart.css'
import ProductWraper from "../../components/pageWraper/pagewraper";
import ButtonFill from "../../components/addToCartBtn/addToCartBtn";
import CartItem from "../../components/cartItem/cartItem";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

export default function Cart() {

    const [cart, setCart] = useLocalStorage("cartItems", { items: []});

    const [subtotal, setSubtotal] = useState(0);

    const checkOutHandler = () => {

    }

    const onRemoveItem = (itemId) => {

        // console.log(itemId);

        const filteredItems = cart.items.filter(item => item.id != itemId)

        setCart({items: [...filteredItems]})

        calculateTotal();
    }

    const onItemQuantityChanged = (itemId, updatedQuantity) => {

        const updatedItems = cart.items.map(item => {

            if(item.id == itemId)
            {
                item.quantity = updatedQuantity;
            }
            return item;
        })

        setCart({items: [...updatedItems]})

        calculateTotal();
    }

    const calculateTotal = () => {
        setSubtotal(cart.items.reduce((acc, curr) => 
        {
            return acc + curr.price * curr.quantity;
        }, 0));
    }

    return<>
        <div className="cartDetailsContainer">
            <div className="cartItemsContainer">
            {
                cart.items.map((item) => <CartItem cartItem={item} onUpdateQuantity={onItemQuantityChanged} onRemove={onRemoveItem} key={item.id}/>)
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
                <ButtonFill text="Check Out" onClick={checkOutHandler}/>
            </div>
        </div>
    </>
}