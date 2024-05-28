import axios from "axios"


const getOrders = async (accesssToken) => {

    const res = await axios.get("http://localhost:3000/api/v1/orders", {
        headers: {
            "authorization": accesssToken
        }
    })

    return res
}

export { getOrders }