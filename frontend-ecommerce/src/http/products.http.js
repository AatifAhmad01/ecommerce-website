import axios from "axios"

const fetchAllProducts = async () => {
    const res = await axios.get("https://seenbeauty.pk/api/v1/products")

    return res
}

const fetchProductsByCategory = async (category) => {
    const res = await axios.get(`https://seenbeauty.pk/api/v1/products/category/${category}`)
    return res
}

export { fetchAllProducts, fetchProductsByCategory }