import React, { useState } from "react";
import './productItem.css'
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../buttonOutline/buttonOutline"

export default function ProductItem({product, onClickAddCart})
{
    const navigate = useNavigate();

    const onProductDetailsHandler = () => {
        navigate("/productdetail", { state: {product} })
    }

    return(
        //onClick={onProductDetailsHandler}
        <div className="item-container">
            <img src={`/images/products/${product.images[0]}.png`} className="item-image" onClick={onProductDetailsHandler}/>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <ButtonOutline onClick={() => onClickAddCart(product)}>{"Add To Cart"}</ButtonOutline>
        </div>
    )
}