import axios from "axios"


const postProduct = async (product, accesssToken) => {

    console.log(accesssToken)

    return res = await axios.post("https://seenbeauty.pk/api/v1/products", product, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNzE2NjIxNTgzLCJleHAiOjE3MTY3MDc5ODN9.7HkoAuUZhBSKcV2pZHkr1BZ1Z98uCrwOQX225RizYXg"
        }
    })
}

export { postProduct }