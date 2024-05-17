import React from "react";
import './checkout.css'
import { TextField, Box } from "@mui/material";
import ButtonFill from "../../components/buttonFill/addToCartBtn";
import { useNavigate } from "react-router-dom";
import OrderSummery from "../../components/orderSummery/orderSummery";

export default function Checkout()
{
    const navigate = useNavigate();

    const onPlacOrdereHandler = () => {
        navigate("/orderPage", { state: null })
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
{/* 

                <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%', maxWidth: 500},
                }} noValidate >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="First Name (Optional)" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Last Name" />
                </Box>

                <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%' },
                }} noValidate >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="Address" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Apartment, suite, etc. (optional)" />
                </Box>


                <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%', maxWidth: 500},
                }} noValidate >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="City" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Postal code" />
                    <TextField fullWidth id="demo-helper-text-aligned" label="Phone" />
                </Box>
                
                <Box component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100%', maxWidth: 500},
                }} noValidate >
                    
                    <ButtonFill>{"Place Order"}</ButtonFill>
                </Box> */}

            </form>
        </div>
    }
    </div>

    <OrderSummery subtotal={314} actionText={"Place Order"} onClickAction={onPlacOrdereHandler} >

    </OrderSummery>

</div>

}

