const asyncHandler = require("../utils/asyncHandler");
const db = require("../db/db.js");
const ApiResponse = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const jwt = require("jsonwebtoken")

const loginUser = asyncHandler(async (req, res) => {

    const { username, password } = req.body;

    try {

        if (!username || !password) {
            return res.status(400).json(new ApiError(400, "All Fields are required"));
        }

        const [userResult] = await db.execute("SELECT * FROM users WHERE username=?", [username]);

        if (!userResult.length) {
            return res.status(400).json(new ApiError(400, "Invalid username"));
        }

        if (userResult[0].password != password) {
            return res.status(400).json(new ApiError(400, "Password Incorrect"));
        }

        const accessToken = jwt.sign({ id: userResult[0].id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: process.env.ACCESS_TOKEN_EXPIRY })

        const cookieOptions = {
            httpOnly: true,
            secure: true
        }

        res.status(200)
            .cookie("accessToken", accessToken, cookieOptions)
            .json(new ApiResponse(200,
                {
                    id: userResult[0].id,
                    username: userResult[0].username,
                    role: userResult[0].role,
                    accessToken
                }
                , "Login Successfully"))
    }
    catch (error) {
        res.status(500).json(new ApiError(500, error.message || "Someting went wronge"))
    }
})

module.exports = { loginUser }