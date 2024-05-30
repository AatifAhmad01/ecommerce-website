import React, { useEffect, useState } from "react";
import './orderProductItem.css'
import { getProductById } from "../../https/product.http";
import { SERVER_SHORTURL } from "../../contants/constants";

export default function OrderProductItem({orderItem}) 
{
    const [productDetails, setProductDetails] = useState({
        id: 0,
        name: "Loading",
        image_url: [
          "",
        ]
    })


    const getProductDetails = async () => {
        try
        {
            const res = await getProductById(orderItem.product_id)
            setProductDetails({
                id: res.data.data.id,
                name: res.data.data.name,
                image_url: res.data.data.image_url
            })
        }
        catch(error)
        {
            setProductDetails(
                {
                    id: 0,
                    name: "Product Not Available",
                    image_url: [
                      "",
                    ]
                }
            )
        }
    }

    useEffect(() => {
        getProductDetails();
    },[orderItem])

    return <div className="order-product-item-container">
        <img className="order-product-item-image" src={`${SERVER_SHORTURL}/${productDetails?.image_url[0]}`} alt="" />
        <h3 className="order-product-item-name">{productDetails?.name}</h3>
        <h3 className="order-product-item-quantity-text">Quantity</h3>
        <h3 className="order-product-item-quantity">{orderItem.quantity}</h3>
        <input className="order-product-item-checkbox" type="checkbox" name="" id="" />
    </div>
}