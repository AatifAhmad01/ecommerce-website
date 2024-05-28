import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import './currentOrders.Page.css'
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';
import { getOrders } from '../../https/orders.http';
import { UserContext } from '../../contexts/UserContext';

export default function CurrentOrdersPage()
{
    const userContext = useContext(UserContext)

    const [selectedOrder, setSelectedOrder] = useState(null)
    const [activeOrders, setActiveOrders] = useState([])

    const selectOrderHanlder = () => {
        console.log("ORder selected")
        setSelectedOrder({
            orderId: 123,
            buyerName: "Atif"
        })
    }

    const getActiveOrders = async () => {
        const res = await getOrders(userContext.user?.accessToken)
        console.log(res)
        setActiveOrders(res.data.data)
    }

    useEffect(() => {
        getActiveOrders();
    }, [])

    return <PageWrapper>
        <div className="current-orders-page-container">
            <div className="current-orders-container">

                {
                    activeOrders.map(order => <CurrentOrderItem onClick={selectOrderHanlder} orderDetails={order}/>)
                }

            </div>
            <div className="selected-order-details-container">
                {selectedOrder ? <OrderDetails/>: null}
            </div>
        </div>
    </PageWrapper>
}