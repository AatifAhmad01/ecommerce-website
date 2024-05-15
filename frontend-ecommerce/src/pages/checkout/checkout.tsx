import React from "react";
import './checkout.css'
import { TextField, Box } from "@mui/material";
import ButtonFill from "../../components/buttonFill/addToCartBtn";

export default function Checkout()
{
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
                

            </form>
        </div>
    }
    </div>
    <div className="productDetailsSection p-4">
        <div className="detailContainer">
            <div className="space-between">
                <div className="cont-1">
                    <div className="textGroupContainer">
                        <h5>SUBTOTAL</h5>
                        {/* <h5>Rs. {subtotal}</h5> */}
                    </div>
                    <div className="textGroupContainer">
                        <p>Delivery Charges</p>
                        {/* <p>{subtotal < 1500 ? deliveryCharges : "Free"}</p> */}
                    </div>
                </div>
                <div className="textGroupContainer">
                    <h5>TOTAL TO PAY</h5>
                    {/* <h5>Rs. {subtotal < 1500 ? subtotal + deliveryCharges : subtotal}</h5> */}
                </div>
            </div>
        </div>

        {/* <AddToCartBtn onClick={addCartHandler}/> */}
        <ButtonFill onClick={""}>{"Check Out"}</ButtonFill>
    </div>
</div>

}

