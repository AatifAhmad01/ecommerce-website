import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import lipstickImage from '../../../public/images/products/bottle1.png'
import ProductSection from "../../components/productSection/productSection";
import { useLocalStorage } from "../../customHooks/useLocalStorage.js";
import ButtonFill from "../../components/addToCartBtn/addToCartBtn";
import Footer from "../../components/footer/footer.jsx";

export default function ProductDetail() {

    const [quantity, setQuantity] = useState(1)
    const [cart, setCart] = useLocalStorage("cartItems", { items: []});

    const location = useLocation();

    const productDetails = location.state.product;

    console.log(productDetails)

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
    const addCartHandler = () => {
        for(var item of cart.items)
        {
            if(item.id == productDetails.id){
                item.quantity = quantity;
                item.totalPrice = productDetails.price * quantity;

                setCart({items: [...cart.items]})
                return;
            }
        }

        setCart({items: [...cart.items, { 
            id: productDetails.id,
            name: productDetails.name,
            imageName: productDetails.imageUrl,
            quantity: quantity,
            price: productDetails.price,
        }]})
    }

    useEffect(() => {
        window.scrollTo(0,0)
        // localStorage.clear();
    }, [])
    return <ProductWraper>
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={lipstickImage} className="productImage"></img>
            </div>
            <div className="productDetailsSection">
                <div className="detailContainer">
                    <div className="detailContainerParent">
                        <p className="productTitle m-3">{productDetails.name}</p>
                        <p className="productDescription m-3" >{productDetails.description}</p>
                        <p className="price m-3">Price: {productDetails.price}</p>
                    </div>
                    <div className="priceContainer">
                        <p className="price">Price: {productDetails.price}</p>
                        <div className="quantityContainer">
                            <button className="quantityBtn" onClick={substractQuantityHandler}>-</button>
                            <input  name="" id="" value={quantity} className="quantityInput" onChange={enterQuantityAmount}/>
                            <button className="quantityBtn" onClick={addQuantityHandler}>+</button>
                        </div>
                    </div>
                </div>

                <ButtonFill text="Add To Cart" onClick={addCartHandler}/>
            </div>
        </div>
        <ProductSection category="New Arival"/>
    </ProductWraper>
}
