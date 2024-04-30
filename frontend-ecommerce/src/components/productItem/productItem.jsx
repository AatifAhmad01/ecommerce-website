import React from "react";
import './productItem.css'
import { json, useNavigate } from "react-router-dom";
import ButtonFill from "../addToCartBtn/addToCartBtn";
import { useLocalStorage } from "../../customHooks/useLocalStorage";

// import itemImage from '../../../public/images/products/lipstick.jpg'

export default function ProductItem({product})
{
    //Better find another way to do this
    // const [cart, setCart] = useLocalStorage("cartItems", { items: []});

    const navigate = useNavigate();

    const onProductDetailsHandler = () => {
        navigate("/productdetail", { state: {product} })
    }

    const addCartHandler = () => {

        const cartItems = JSON.parse(localStorage.getItem("cartItems"))

        console.log("Adding To Cart")

        for(var item of cartItems.items)
        {
            if(item.id == product.id){

                return;
            }
        }

        const itemToSet = {items: [...cartItems.items, { 
            id: product.id,
            name: product.name,
            quantity: 1,
            price: product.price,
            totalPrice: product.price
        }]}

        localStorage.setItem("cartItems",JSON.stringify(itemToSet))
    }

    return(
        //onClick={onProductDetailsHandler}
        <div className="item-container" >
            <img src={`../../../public/images/products/${product.imageUrl}.jpg`} className="item-image" onClick={onProductDetailsHandler}/>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <ButtonFill onClick={addCartHandler} text="Add To Cart"/>

        </div>
    )
}