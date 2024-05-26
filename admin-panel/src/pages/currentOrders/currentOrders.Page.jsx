import React, { useState } from 'react';
import './currentOrders.Page.css'
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';

export default function CurrentOrdersPage()
{
    const [selectedOrder, setSelectedOrder] = useState(null)

    const selectOrderHanlder = () => {
        console.log("ORder selected")
        setSelectedOrder({
            orderId: 123,
            buyerName: "Atif"
        })
    }


    return <PageWrapper>
        <div className="current-orders-page-container">
            <div className="current-orders-container">

                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>
                <CurrentOrderItem onClick={selectOrderHanlder}/>

            </div>
            <div className="selected-order-details-container">
                {selectedOrder ? <OrderDetails/>: null}
            </div>
        </div>
    </PageWrapper>
}