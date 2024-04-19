import React from "react";
import './productSection.css'
import Item from "../item/item";

export default function ProductSection()
{
    return(
        <div className="products-container">
            <h1 className="products-heading">New Arival</h1>
            <div className="product-list">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
            <button className="more-button">Expore More</button>
        </div>
    )
}