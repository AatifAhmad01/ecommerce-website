import './orderProductItem.css'
import { SERVER_SHORTURL } from "../../contants/constants";


export default function OrderProductItem({productDetails}) 
{
    // console.log(productDetails)

    return <div className="order-product-item-container">
        <img className="order-product-item-image" src={`${SERVER_SHORTURL}/${productDetails?.image_url[0]}`} alt="" />
        {/* <h3 className="order-product-item-name">{productDetails?.image_url[0]}</h3> */}
        <h3 className="order-product-item-name">{productDetails?.name}</h3>
        <h3 className="order-product-item-quantity">{productDetails?.price}</h3>
        <h3 className="order-product-item-quantity-text">Quantity</h3>
        <h3 className="order-product-item-quantity">{productDetails.quantity}</h3>
        <input className="order-product-item-checkbox" type="checkbox" name="" id="" />
    </div>
}