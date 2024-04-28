import React from "react";
import './productItem.css'
import { useNavigate } from "react-router-dom";

// import itemImage from '../../../public/images/products/lipstick.jpg'

export default function ProductItem({product})
{

    const navigate = useNavigate();

    const onProductDetailsHandler = () => {
        navigate("/productdetail", { state: {product} })
    }

    return(
        <div className="item-container" onClick={onProductDetailsHandler}>
            <img src={`../../../public/images/products/${product.imageUrl}.jpg`} className="item-image"/>
            <h6 className="item-title">{product.name}</h6>
            <h6 className="item-price">Rs. {product.price}</h6>
            <div className="buttons-container">
                <button className="add-cart-button">Add To Cart</button>
                {/* <button className="favorite-button"> </button> */}
                {/* <span class="material-symbols-rounded add-icon">favorite</span> */}
            </div>
        </div>
    )
}