import React from "react";
import OrderProductItem from "../orderProductItem/orderPoductItem";
import ParagraphText from "../paragraphText/paragraphText";
import PrimaryButton from "../primaryButton/primaryButton";

export default function OrderDetails({orderDetails, onDeliver})
{
    const { address, appartment, city, extraphone, firstname, lastname, phone, postalcode } = orderDetails.customer

    return <div className="order-details-item-container">

        {
            orderDetails?.orderedItems?.map(item => <OrderProductItem orderItem={item}/>)
        }

        <ParagraphText label={"Address"}>{address}</ParagraphText>
        <ParagraphText label={"Appartment"}>{appartment}</ParagraphText>
        <ParagraphText label={"City"}>{city}</ParagraphText>
        <ParagraphText label={"Extra Phone"}>{extraphone}</ParagraphText>
        <ParagraphText label={"First Name"}>{firstname}</ParagraphText>
        <ParagraphText label={"Last Name"}>{lastname}</ParagraphText>
        <ParagraphText label={"Phone"}>{phone}</ParagraphText>
        <ParagraphText label={"Postal Code"}>{postalcode}</ParagraphText>

        <PrimaryButton onClick={() => onDeliver(orderDetails.id)}>Deliver</PrimaryButton>
        
    </div>
}