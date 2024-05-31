import React from "react";
import './checkout.css'
import { TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderSummery from "../../components/orderSummery/orderSummery";
import { placeOrder } from "../../http/orders.http";

export default function Checkout()
{
    const navigate = useNavigate();

    const onPlacOrdereHandler = async () => {

        try
        {
            const res = await placeOrder({
                items: 
                [
                    {
                        "product_id": 62,
                        "quantity": 4
                    },
                    {
                        "product_id": 62,
                        "quantity": 1
                    }
                ],
                customerDetails: 
                {
                    "firstName": "Atif",
                    "lastName": "Ahmad",
                    "address": "Muhalla qada khel chamkani Peshawar",
                    "appartment": "Appartment",
                    "city": "Peshawar",
                    "postalCode": 25000,
                    "phone": "03139262165",
                    "extraPhone": 0
                }
            })
            navigate("/orderPage", { state: null })
        }
        catch(error)
        {
            console.log("Error while placing order")
        }

    }

    return <div className="cartDetailsContainer">
    <div className="cartItemsContainer">
    {
        <div>
            <form className="orderDetailsForm">

            <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%', maxWidth: 500},
                }} noValidate >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="Country/Region" disabled defaultValue={"Pakistan"}/>
                </Box>

                <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%', maxWidth: 500},
                }} >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="First Name" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Last Name (Optional)" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Address" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Apartment, suite, etc. (optional)" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="City" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Postal code" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Phone" />
                </Box>
            </form>
        </div>
    }
    </div>

    <OrderSummery subtotal={314} actionText={"Place Order"} onClickAction={onPlacOrdereHandler} >

    </OrderSummery>

</div>

}

