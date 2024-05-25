const asyncHandler = require("../utils/asyncHandler");
const db = require("../db/db.js");
const ApiResponse = require("../utils/ApiResponse.js");
const ApiError = require("../utils/ApiError.js");
const jwt = require("jsonwebtoken")

const loginUser = asyncHandler(async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    try {

        if (!username || !password) throw "Username or password in incorrect"

        const [userResult] = await db.execute("SELECT * FROM users WHERE username=?", [username]);

        if (userResult[0].password != password) throw new ApiError(401, "Password Incorrect");

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
                    role: userResult[0].role
                }
                , "Login Successfully"))
    }
    catch (error) {
        res.status(401).json(new ApiError(401, error.message || "Someting went wronge"))
    }
})

module.exports = { loginUser }