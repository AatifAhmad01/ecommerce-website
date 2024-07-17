import React, { useContext, useEffect, useState } from 'react';
import './currentOrders.Page.css'
import PageWrapper from '../../components/pageWrapper/pageWrapper';
import CurrentOrderItem from '../../components/currentOrderItem/currentOrderItem';
import OrderDetails from '../../components/orderDetailsItem/orderDetails';
import { getOrders, deliverOrder } from '../../https/orders.http';
import { UserContext } from '../../contexts/UserContext';
import PrimaryButton from '../../components/primaryButton/primaryButton';

export default function CurrentOrdersPage()
{
    const userContext = useContext(UserContext)

    const [selectedOrder, setSelectedOrder] = useState(null)
    const [activeOrders, setActiveOrders] = useState([])
    const [tempActiveOrders, setTempActiveOrder] = useState([])

    const selectOrderHanlder = (orderDetails) => {
        setSelectedOrder(orderDetails)
    }

    const getActiveOrders = async () => {
        const res = await getOrders(userContext.user?.accessToken)
        setActiveOrders(res.data.data)
        setTempActiveOrder(res.data.data)
    }

    const onDeliverOrderHanlder = (orderId) => {
        deliverOrder(orderId, userContext.user?.accessToken)
        .then(() => {
            const updatedOrers = activeOrders.filter(order => order.id != orderId)
            setActiveOrders(updatedOrers);
            setTempActiveOrder(updatedOrers)
            setSelectedOrder(null)
        })
        .catch(error => console.log(error))
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
                {selectedOrder ? <OrderDetails orderDetails={selectedOrder} onDeliver={onDeliverOrderHanlder}/> : null}
            </div>
        </div>
    </PageWrapper>
}