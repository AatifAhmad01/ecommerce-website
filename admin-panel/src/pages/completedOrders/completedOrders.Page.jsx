import React, { useState, useEffect, useContext } from 'react';
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';
import { UserContext } from '../../contexts/UserContext';
import { deleteAllDeliveredOrders, deleteOrder, getCompletedOrders } from '../../https/orders.http';
import DangerButton from '../../components/dangerButton/dangerButton';

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

    const onDeleteOrderHanlder = async (orderId) => {
        const res = await deleteOrder(orderId, userContext.user?.accessToken)
        const updatedOrers = activeOrders.filter(order => order.id != orderId)
        setActiveOrders([...updatedOrers])
        setSelectedOrder(null)
    }

    const onDeletedDeliveredOrders = async () => {
        await deleteAllDeliveredOrders(userContext.user?.accessToken)
        setActiveOrders([])
        setSelectedOrder(null)
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
            {selectedOrder ? <OrderDetails orderDetails={selectedOrder} onDelete={onDeleteOrderHanlder}/> : null}
        </div>
    </div>
    <DangerButton onClick={onDeletedDeliveredOrders}>Delete All</DangerButton>
</PageWrapper>
}