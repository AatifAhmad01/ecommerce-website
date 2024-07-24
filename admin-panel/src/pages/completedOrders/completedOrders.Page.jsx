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
    const [tempActiveOrders, setTempActiveOrder] = useState([])

    const selectOrderHanlder = (orderDetails) => {
        setSelectedOrder(orderDetails)
    }

    const getActiveOrders = async () => {
        const res = await getCompletedOrders(userContext.user?.accessToken)
        setActiveOrders(res.data.data)
        setTempActiveOrder(res.data.data)
    }

    const onDeleteOrderHanlder = async (orderId) => {
            await deleteOrder(orderId, userContext.user?.accessToken)
        const updatedOrers = tempActiveOrders.filter(order => order.id != orderId)
        setActiveOrders([...updatedOrers])
        setTempActiveOrder([...updatedOrers])
        setSelectedOrder(null)
    }

    const onDeleteAllOrders = async () => {
        await deleteAllDeliveredOrders(userContext.user?.accessToken)
        setActiveOrders([])
        setSelectedOrder(null)
    }

    const searchOrderHanlder = (e) => {
        const orderId = e.target.value

        if(!orderId) 
        {
            setActiveOrders(tempActiveOrders);
            return;
        }

        const updatedOrers = tempActiveOrders.filter(order => order.id == orderId)
        setActiveOrders(updatedOrers);
    }

    useEffect(() => {
        getActiveOrders();
    }, [])

    return <PageWrapper>
        <label htmlFor="orderSearch" className='orderSearchLabel'>Search Order</label>
        <input type="search" name="searchOrder" id="orderSearch" placeholder='Enter Order Id' onChange={searchOrderHanlder}/>
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
        <DangerButton onClick={onDeleteAllOrders}>Delete All</DangerButton>
</PageWrapper>
}