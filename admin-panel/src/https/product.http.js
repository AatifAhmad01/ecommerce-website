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

export { postProduct }