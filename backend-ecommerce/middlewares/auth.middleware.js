import jwt from 'jsonwebtoken'
import asyncHanlder from '../utils/asyncHandler'
import cookieParser from 'cookie-parser'
import ApiError from '../utils/ApiError'


export const verifyJWT = asyncHanlder(async (req, _, next) => {

    // Extract token
    // Varify Token
    // Get user from db
    // Return User

    try {
        const token = req.cookies?.accessToken || req.headers("Authorization")?.resplace("Barear ", "")

        if (!token) {
            throw new ApiError(400, "Unauthorized Access");
        }

        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)

        console.log(decodedToken)



        next();
    }
    catch (error) {
        throw new ApiError(400, error?.message || "Inavlid Access Token")
    }

})