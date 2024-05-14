import React, {useState, useEffect, useContext} from "react";
import { useLocation } from "react-router-dom";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import ProductSection from "../../components/productSection/productSection";
import { useLocalStorage } from "../../customHooks/useLocalStorage.js";
import ButtonFill from "../../components/buttonFill/addToCartBtn.jsx";
import MoreImageItem from "../../components/productMoreImageItem/moreImageItem.jsx";
import { CartContext } from "../../context/CartContext.jsx";

export default function ProductDetail() {

    const [quantity, setQuantity] = useState(1)
    const [imageIndex, setImageIndex] = useState(0);

    const cartContext = useContext(CartContext);

    const location = useLocation();

    const productDetails = location.state.product;

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

        cartContext.onAddItem({
            id: productDetails.id,
            name: productDetails.name,
            imageName: productDetails.imageUrl,
            quantity: quantity,
            price: productDetails.price,
        })

        // console.log(cartContext);

        // setItems(["hell", "helo", "he"])
    }

    const onImageChangeHandler = (imageIndex)=> {
        setImageIndex(imageIndex);
    }

    useEffect(() => {
        window.scrollTo(0,0)
        // localStorage.clear();
    }, [])
    return <ProductWraper>
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={`../../../public/images/products/${productDetails.images[imageIndex]}.png`} className="productImage"></img>
            </div>
            <div className="moreImagesContainer">
                <MoreImageItem imageName={"image1"} imageIndex={0} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
                <MoreImageItem imageName={"image2"} imageIndex={1} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
                <MoreImageItem imageName={"image3"} imageIndex={2} selectedIndex={imageIndex} onClick={onImageChangeHandler}/>
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

                <ButtonFill onClick={addCartHandler}>{"Add To Cart"}</ButtonFill>
            </div>
        </div>
        <ProductSection category="New Arival"/>
    </ProductWraper>
}
