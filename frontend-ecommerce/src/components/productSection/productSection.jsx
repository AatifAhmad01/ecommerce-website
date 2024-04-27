import React from "react";
import './productSection.css'
import ProductItem from "../productItem/productItem";
import { products } from "../../models/products.js"

export default function ProductSection({category})
{

    

    return(
        <div className="products-container">
            <h1 className="products-heading">{category}</h1>
            <div className="product-list">
                {
                    products.map(item => <ProductItem product={item}/> )
                }

            </div>
            <button className="more-button">Expore More</button>
        </div>
    )
}