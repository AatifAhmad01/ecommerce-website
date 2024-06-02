import React, { useState } from "react";
import './checkout.css'
import { TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import OrderSummery from "../../components/orderSummery/orderSummery";
import { placeOrder } from "../../http/orders.http";
import { useSelector } from "react-redux";
import TransparentLoading from "../../components/transparentLoading/transparentLoading";


export default function Checkout()
{
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false)

    const [customerDetails, setCustomerDetails] = useState({
        firstname: { isValid: true, value: null},
        lastname: { isValid: true, value: null},
        address: { isValid: true, value: null},
        appartment: { isValid: true, value: ""},
        city: { isValid: true, value: null},
        postalcode: { isValid: true, value: null},
        phone: { isValid: true, value: null},
        extraPhone: { isValid: true, value: 0}
    })

    const cartItems = useSelector(state => state.cart)

    const onTextChangeHanlder = (e) => {

        const name = e.target.name;
        const value = e.target.value
        setCustomerDetails({...customerDetails, [name]: { isValid: true, value }})
    }

    const validateCustomerForm = () => {
        const { firstname, address, city, postalcode, phone  } = customerDetails;

        if(!firstname.value || !address.value || !city.value || !postalcode.value || !phone.value)
        {
            setCustomerDetails({...customerDetails, 
                ["firstname"]: { isValid: !!firstname.value, value: firstname.value},
                ["address"]: { isValid: !!address.value, value: address.value},
                ["city"]: { isValid: !!city.value, value: city.value},
                ["postalcode"]: { isValid: !!postalcode.value, value: postalcode.value},
                ["phone"]: { isValid: !!phone.value, value: phone.value},
            })

            throw "Form Invalid"
        }
    }

    const onPlacOrdereHandler = async () => {

        let orderItems = []

        cartItems.items.forEach(item => {
            orderItems.push({product_id: item.id, quantity: item.quantity})
        })

        try
        {
            validateCustomerForm();
            
            setIsLoading(true)

            const res = await placeOrder({
                items: orderItems,
                customerDetails: 
                {
                    firstName: customerDetails.firstname.value,
                    lastName: customerDetails.lastname.value,
                    address: customerDetails.address.value,
                    appartment: customerDetails.appartment.value,
                    city: customerDetails.city.value,
                    postalCode: customerDetails.postalcode.value,
                    phone: customerDetails.phone.value,
                    extraPhone: customerDetails.extraPhone.value
                }
            })

            const placedOrderId = res.data.data.orderId

            navigate("/orderPage", { state: { orderId: placedOrderId} })
        }
        catch(error)
        {
            console.log("Error " + error)
            setIsLoading(false)
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
                }} >
                    
                    <TextField fullWidth id="demo-helper-text-aligned" label="Phone (Optional)" name="extraphone"/>
                    <pre style={{marginLeft: "20px"}}>For promotions only.</pre>
                    <br/>

                </Box>

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
                    
                    <TextField error={!customerDetails.firstname.isValid} fullWidth id="demo-helper-text-aligned" className="remove-number-arraow" label="First Name" name="firstname" 
                        onChange={onTextChangeHanlder}/>

                    <TextField fullWidth id="demo-helper-text-aligned" label="Last Name (Optional)" name="lastname"
                        onChange={onTextChangeHanlder}/>

                    <TextField error={!customerDetails.address.isValid} fullWidth id="demo-helper-text-aligned" label="Address" name="address"
                        onChange={onTextChangeHanlder}/>

                    <TextField fullWidth id="demo-helper-text-aligned" label="Apartment, suite, etc. (optional)" name="appartment"
                        onChange={onTextChangeHanlder}/>  

                    <TextField error={!customerDetails.city.isValid} fullWidth id="demo-helper-text-aligned" label="City" name="city"
                        onChange={onTextChangeHanlder}/>

                    <TextField error={!customerDetails.postalcode.isValid} fullWidth id="demo-helper-text-aligned" label="Postal code" name="postalcode" type="number"
                        onChange={onTextChangeHanlder}/>

                    <TextField error={!customerDetails.phone.isValid} fullWidth id="demo-helper-text-aligned" label="Phone" name="phone" type="number"
                        onChange={onTextChangeHanlder}/>
                </Box>
            </form>
        </div>
    }
    </div>

    <OrderSummery subtotal={314} actionText={"Place Order"} onClickAction={onPlacOrdereHandler} orderItems={cartItems.items}></OrderSummery>

    { isLoading? <TransparentLoading>Placing Order</TransparentLoading> : null }
</div>

}

