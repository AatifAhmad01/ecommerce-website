import axios from "axios"
import { websiteUrl } from "../constants/websiteUrl"

const fetchNewArialProducts = async (size) => {
    const res = await axios.get(`${websiteUrl}/api/v1/products/getproducts/allcategories?random=true&size=${size}`)
    return res
}

const fetchAllProducts = async (page, pageSize) => {
    const res = await axios.get(`${websiteUrl}/api/v1/products?random=true&page=${page}&pageSize=${pageSize}`)
    return res
}

const fetchProductsByCategory = async (category) => {
    const res = await axios.get(`${websiteUrl}/api/v1/products/category/${category}?random=true`)
    return res
}

const fetchProductsBrand = async (brand) => {
    const res = await axios.get(`${websiteUrl}/api/v1/products/brand/${brand}?random=true`)
    return res
}

export { fetchAllProducts, fetchNewArialProducts, fetchProductsByCategory, fetchProductsBrand }