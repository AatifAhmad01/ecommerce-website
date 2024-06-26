import axios from "axios"
import { websiteUrl } from '../constants/websiteUrl.js'

const placeOrder = async (orderDetais) => {
    const res = await axios.post(`${websiteUrl}/api/v1/orders`, orderDetais)

    return res
}


export { placeOrder }
