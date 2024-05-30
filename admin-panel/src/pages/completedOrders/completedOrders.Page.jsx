import React, { useState, useEffect, useContext } from 'react';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';
import { UserContext } from '../../contexts/UserContext';
import { getCompletedOrders } from '../../https/orders.http';

export default function CompletedOrdersPage()
{
    const userContext = useContext(UserContext)

    const [selectedOrder, setSelectedOrder] = useState(null)
    const [activeOrders, setActiveOrders] = useState([])

    const selectOrderHanlder = (orderDetails) => {
        setSelectedOrder(orderDetails)
    }

    const getActiveOrders = async () => {
        const res = await getCompletedOrders(userContext.user?.accessToken)
        setActiveOrders(res.data.data)
    }

    useEffect(() => {
        getActiveOrders();
    }, [])

    return <PageWrapper>
    <div className="current-orders-page-container">
        <div className="current-orders-container">

            {
                activeOrders.map(order => <CurrentOrderItem key={order.id} onClick={selectOrderHanlder} orderDetails={order}/>)
            }

        </div>
        <div className="selected-order-details-container">
            {selectedOrder ? <OrderDetails orderDetails={selectedOrder}/> : null}
        </div>
    </div>
</PageWrapper>
}