import React, { useEffect, useState } from "react";
import OrderProductItem from "../orderProductItem/orderPoductItem";
import ParagraphText from "../paragraphText/paragraphText";
import PrimaryButton from "../primaryButton/primaryButton";
import './orderDetails.css'
import DangerButton from "../dangerButton/dangerButton";
import { gerOrder } from "../../https/orders.http.js";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function OrderDetails({orderDetails, onDeliver, onDelete})
{
    const userContext = useContext(UserContext)

    const [orderPrice, setOrderPrice] = useState(0)
    const [orderedItems, setOrderedItems] = useState([])

    const { address, appartment, city, extraphone, firstname, lastname, phone, postalcode } = orderDetails.customer


    const getOrder = async () => {

        try
        {
            const res = await gerOrder(orderDetails.id, userContext.user?.accessToken)

            setOrderedItems(res.data.data.orderedItems)

            const totalPrice = res.data.data.orderedItems.reduce((acc, item) => 
                {
                    return acc.price * acc.quantity + item.price * item.quantity
                })

            setOrderPrice(totalPrice)
        }
        catch(error)
        {

        }
    }

    useEffect(() => {
        setOrderPrice(0)
        getOrder()
    }, [orderDetails])

    return <div className="order-details-item-container">

        {
            orderedItems.map((item, index) => <OrderProductItem key={index} productDetails={item}/>)
        }

        <ParagraphText label={"Total Order Price"}>{orderPrice}</ParagraphText>
        <ParagraphText label={"Address"}>{address}</ParagraphText>
        <ParagraphText label={"Appartment"}>{appartment}</ParagraphText>
        <ParagraphText label={"City"}>{city}</ParagraphText>
        <ParagraphText label={"Extra Phone"}>{extraphone}</ParagraphText>
        <ParagraphText label={"First Name"}>{firstname}</ParagraphText>
        <ParagraphText label={"Last Name"}>{lastname}</ParagraphText>
        <ParagraphText label={"Phone"}>{phone}</ParagraphText>
        <ParagraphText label={"Postal Code"}>{postalcode}</ParagraphText>

        {
            orderDetails.delivered == 0 ? <PrimaryButton onClick={() => onDeliver(orderDetails.id)}>Deliver</PrimaryButton> : 
            <DangerButton onClick={() => onDelete(orderDetails.id)}>Delete</DangerButton>
        }

        
    </div>
}