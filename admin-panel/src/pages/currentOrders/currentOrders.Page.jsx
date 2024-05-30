import React, { useContext, useEffect, useState } from 'react';
import './currentOrders.Page.css'
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';
import { getOrders, deliverOrder } from '../../https/orders.http';
import { UserContext } from '../../contexts/UserContext';

export default function CurrentOrdersPage()
{
    const userContext = useContext(UserContext)

    const [selectedOrder, setSelectedOrder] = useState(null)
    const [activeOrders, setActiveOrders] = useState([])

    const selectOrderHanlder = (orderDetails) => {
        setSelectedOrder(orderDetails)
    }

    const getActiveOrders = async () => {
        const res = await getOrders(userContext.user?.accessToken)
        setActiveOrders(res.data.data)
    }

    const onDeliverOrderHanlder = (orderId) => {
        console.log(orderId)

        deliverOrder(orderId, userContext.user?.accessToken)
        .then(() => {
            const updatedOrers = activeOrders.filter(order => order.id != orderId)
            setActiveOrders(updatedOrers);
            setSelectedOrder(null)
        })
        .catch(error => console.log(error))
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
                {selectedOrder ? <OrderDetails orderDetails={selectedOrder} onDeliver={onDeliverOrderHanlder}/> : null}
            </div>
        </div>
    </PageWrapper>
}