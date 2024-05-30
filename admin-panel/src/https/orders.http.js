import axios from "axios"
import { SERVER_URL } from "../contants/constants"


const getOrders = async (accesssToken) => {

    const res = await axios.get(`${SERVER_URL}/orders`, {
        headers: {
            "authorization": accesssToken
        },
    })

    return res
}

const getCompletedOrders = async (accesssToken) => {

    const res = await axios.get(`${SERVER_URL}/orders/delivered`, {
        headers: {
            "authorization": accesssToken
        },
    })

    return res
}

const deliverOrder = async (orderId, accesssToken) => {

    const res = await axios.patch(`${SERVER_URL}/orders/${orderId}`, {}, {
        headers: {
            "authorization": accesssToken
        }
    })

    return res
}


export { getOrders, deliverOrder, getCompletedOrders }