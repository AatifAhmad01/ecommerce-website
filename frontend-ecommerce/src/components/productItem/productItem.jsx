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
        <div className="item-container">
            {
                !product.instock && <div className="outofstock-warning">
                Out of stock
                </div>
            }
            
            <div className="product-item-image-container">
                <img src={`https://seenbeauty.pk/${product.image_url[0]}`} className="item-image" onClick={onProductDetailsHandler}/>
            </div>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <ButtonOutline onClick={() => onClickAddCart(product)} isDisabled={!product.instock}>{"Add To Cart"}</ButtonOutline>
        </div>
    )
}