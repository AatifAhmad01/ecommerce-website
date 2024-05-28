import axios from "axios"


const postProduct = async (product, accesssToken) => {

    const res = await axios.post("http://localhost:3000/api/v1/products", product, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

const getProductByName = async (productName, accesssToken) => {
    const res = await axios.get(`http://localhost:3000/api/v1/products/name/${productName}`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

const updateProduct = async (productId, product, accesssToken) => {

    const res = await axios.patch(`http://localhost:3000/api/v1/products/${productId}`, product, {
        headers: {
            "authorization": accesssToken
        }
    })

    return res
}

const deleteProduct = async (productId, accesssToken) => {
    const res = await axios.delete(`http://localhost:3000/api/v1/products/${productId}`, {
        headers: {
            'Content-Type': 'multipart/form-data',
            "authorization": accesssToken
        }
    })

    return res
}

export { postProduct, getProductByName, updateProduct, deleteProduct }