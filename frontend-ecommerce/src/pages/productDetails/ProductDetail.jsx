import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import lipstickImage from '../../../public/images/products/bottle1.png'
import AddToCartBtn from "../../components/addToCartBtn/addToCartBtn";
import ProductSection from "../../components/productSection/productSection";

export default function ProductDetail() {

    window.scrollTo(0,0)

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
        if(e.target.value == "0" || !e.target.value) return;
        
        if(e.target.value.length < 1) {
            setQuantity("");
            return;
        }

        setQuantity(parseInt(e.target.value))
    }

    return <ProductWraper>
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={lipstickImage} className="productImage"></img>
            </div>
            <div className="productDetailsSection">
                <div className="detailContainer">
                    <div className="detailContainerParent">
                        <p className="productTitle">{productDetails.name}</p>
                        <p className="productDescription" >{productDetails.description}</p>
                    </div>
                    <div className="priceContainer">
                        <strong className="price">Price: {productDetails.price}</strong>
                        <div className="quantityContainer">
                            <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                            <input  name="" id="" value={quantity} className="quantityInput" onChange={enterQuantityAmount}/>
                            <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>

                <AddToCartBtn/>
            </div>
        </div>
        <ProductSection category="New Arival"/>
    </ProductWraper>
}
