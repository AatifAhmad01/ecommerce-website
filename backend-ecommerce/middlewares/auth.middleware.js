const jwt = require('jsonwebtoken');
const asyncHandler = require('../utils/asyncHandler');
const ApiError = require('../utils/ApiError');

const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.headers["Authorization"]?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(400, "Unauthorized Access");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        next();
    } catch (error) {
        throw new ApiError(401, "Invalid Access Token")
    }
});

module.exports = verifyJWT;
