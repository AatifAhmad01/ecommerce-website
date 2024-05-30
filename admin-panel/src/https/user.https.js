import axios from "axios"
import { SERVER_URL } from "../contants/constants"

const userLogin = async (username, password) => {
    const res = await axios.post(`${SERVER_URL}/user/login`, {
        username,
        password
    })

    return res
}


export { userLogin }