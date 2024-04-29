import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import lipstickImage from '../../../public/images/products/lipstick.jpg'
import AddToCartBtn from "../../components/addToCartBtn/addToCartBtn";

export default function ProductDetail() {

    const [quantity, setQuantity] = useState(1)

    const location = useLocation();

    const productDetails = location.state.product;

    const addQuantityHandler = ()=> {
        setQuantity(quantity + 1)
    }

    const substractQuantityHandler = () => {
        const newQuantity = quantity - 1;
        if(newQuantity < 1 )return;
        setQuantity(newQuantity)
    }

    const enterQuantityAmount = (e) => {
        if(e.target.value == "0") return;
        if(e.target.value.length < 1) {
            setQuantity("");
            return;
        }

        setQuantity(parseInt(e.target.value))
    }

    useEffect(()=> {
        console.log(location)
        console.log("helo")

    },[location])

    return <ProductWraper>
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={lipstickImage} className="productImage"></img>
            </div>
            <div className="productDetailsSection">
                <div className="detailContainer">
                    <strong className="productTitle">
                        {productDetails.name}
                    </strong>
                    <p className="productDescription" >{productDetails.description}</p>
                    <div className="priceContainer">
                        <strong>Price: {productDetails.price}</strong>
                        <div className="quantityContainer">
                            <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                            <input type="number" name="" id="" defaultValue={1} value={quantity} className="quantityInput" onChange={enterQuantityAmount}/>
                            <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>

                <AddToCartBtn/>
            </div>
        </div>
    </ProductWraper>
}
