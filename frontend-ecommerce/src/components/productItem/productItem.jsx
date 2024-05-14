import React, { useState } from "react";
import './productItem.css'
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../buttonOutline/buttonOutline"
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";

export default function ProductItem({product})
{
    const [fadeClass, setFaceClass] = useState("");

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onProductDetailsHandler = () => {
        navigate("/productdetail", { state: {product} })
    }

    const addCartHandler = () => {
        dispatch(addItem({
            id: product.id,
            name: product.name,
            imageName: product.imageUrl,
            quantity: 1,
            price: product.price,
        }))
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