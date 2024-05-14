import React, { useState } from "react";
import './productItem.css'
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../buttonOutline/buttonOutline";

// import itemImage from '../../../public/images/products/lipstick.jpg'

export default function ProductItem({product})
{
    //Better find another way to do this
    // const [cart, setCart] = useLocalStorage("cartItems", { items: []});

    const [fadeClass, setFaceClass] = useState("");

    const navigate = useNavigate();

    const onProductDetailsHandler = () => {
        navigate("/productdetail", { state: {product} })
    }

    const addCartHandler = () => {



    }

    return(
        //onClick={onProductDetailsHandler}
        <div className="item-container">
            <img src={`/images/products/${product.images[0]}.png`} className="item-image" onClick={onProductDetailsHandler}/>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <ButtonOutline onClick={addCartHandler}>{"Add To Cart"}</ButtonOutline>
        </div>
    )
}