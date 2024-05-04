import React, { useEffect, useState } from "react";
import './cartItem.css'
import closeIcon from '../../assets/icons/close.svg'

export default function CartItem({onRemove, onUpdateQuantity, cartItem})
{
// console.log(cartItem);

    const [quantity, setQuantity] = useState(cartItem.quantity)

    const addQuantityHandler = ()=> {

        if(!quantity) {
            setQuantity(1);
            return;
        }

        setQuantity(quantity + 1)
    }

    const substractQuantityHandler = () => {
        const newQuantity = quantity - 1;
        if(newQuantity < 1 )return;
        setQuantity(newQuantity)
    }

    const enterQuantityAmount = (e) => {
        if(isNaN(e.target.value) || e.target.value == "0") return;

        if(e.target.value.length < 1) {
            setQuantity("");
            return;
        }

        setQuantity(parseInt(e.target.value))
    }

    useEffect(() => {
        onUpdateQuantity(cartItem.id, quantity);
    }, [quantity])

    return <div className="cartItemContainer">
                <div className="cartItemDetailsOuterContainer">
                <div className="removeButtonContainer">
                    <button className="removeBtn" onClick={() => onRemove(cartItem.id)}><img src={closeIcon}></img></button>
                </div>
                <img src={`'../../../public/images/products/${cartItem.imageName}.jpg`} alt="" className="cartItemImage"/>
                <div className="cartItemDetailsContainer">
                    <p className="cartItemTitle">{cartItem.name}</p>
                    <p>Item Price: {cartItem.price}</p>
                    <strong>Total: {cartItem.price * cartItem.quantity}</strong>
                </div>
            </div>
            {/* <div className="cartItemTotalPriceContainer">
                <p>Total Price: {cartItem.totalPrice}</p>
            </div> */}
            <div className="cartItemQuantityContainer">
                <div className="quantityContainer">
                <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                <input  name="" id="" value={quantity} className="quantityInput" onChange={enterQuantityAmount}/>
                <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                </div>
            </div>

    </div>
}