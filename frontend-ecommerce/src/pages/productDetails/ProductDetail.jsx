import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import ProductWraper from "../../components/pageWraper/pagewraper";
import './productDetail.css'
import lipstickImage from '../../../public/images/products/lipstick.jpg'

export default function ProductDetail() {

    console.log("Loaded");

    const location = useLocation();

    const productDetails = location.state.product;

    useEffect(()=> {
        console.log(location)
        console.log("helo")

    },[location])

    return <ProductWraper>
        <div className="detailsContainer">
            <div className="productImageSection">
                <img src={lipstickImage}></img>
            </div>
            <div className="productDetailsSection">
                <h1>{productDetails.name}</h1>
                <p>{productDetails.description}</p>
            </div>
        </div>
    </ProductWraper>
}