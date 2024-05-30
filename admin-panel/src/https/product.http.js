import axios from "axios"
import { SERVER_URL } from "../contants/constants"

const postProduct = async (product, accesssToken) => {

    const res = await axios.post(`${SERVER_URL}/products`, product, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

const getProductById = async (productId) => {

    const res = await axios.get(`${SERVER_URL}/products/${productId}`)
    return res
}

const getProductByName = async (productName, accesssToken) => {
    const res = await axios.get(`${SERVER_URL}/products/name/${productName}`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

const updateProduct = async (productId, product, accesssToken) => {

    const res = await axios.patch(`${SERVER_URL}/products/${productId}`, product, {
        headers: {
            "authorization": accesssToken
        }
    })

    return res
}

const deleteProduct = async (productId, accesssToken) => {
    const res = await axios.delete(`${SERVER_URL}/products/${productId}`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

export { postProduct, getProductByName, getProductById, updateProduct, deleteProduct }