import axios from "axios"

const userLogin = async (username, password) => {
    const res = await axios.post("http://localhost:3000/api/v1/user/login", {
        username,
        password
    })

    return res
}


export { userLogin }