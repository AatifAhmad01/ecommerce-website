import axios from "axios"
import { websiteUrl } from "../constants/websiteUrl"

const fetchAllProducts = async () => {
    const res = await axios.get(`${websiteUrl}/api/v1/products?random=true`)

    return res
}

const fetchProductsByCategory = async (category) => {
    const res = await axios.get(`${websiteUrl}/api/v1/products/category/${category}?random=true`)
    return res
}

export { fetchAllProducts, fetchProductsByCategory }