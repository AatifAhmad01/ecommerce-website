import axios from "axios"

const placeOrder = async (orderDetais) => {
    const res = await axios.post("https://seenbeauty.pk/api/v1/orders", orderDetais)

    return res
}


export { placeOrder }
