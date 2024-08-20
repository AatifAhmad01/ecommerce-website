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
                {/* <img src={`https://seenbeauty.pk/${product.image_url[0]}`} className="item-image" onClick={onProductDetailsHandler} loading="lazy"/> */}
                <img src={`https://res.cloudinary.com/djyxhzq2o/image/upload/v1724135224/images-1723102640430-141924090_wxvff3.webp`} className="item-image" onClick={onProductDetailsHandler} loading="lazy"/>
            </div>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <ButtonOutline onClick={() => onClickAddCart(product)} isDisabled={!product.instock}>{"Add To Cart"}</ButtonOutline>
        </div>
    )
}