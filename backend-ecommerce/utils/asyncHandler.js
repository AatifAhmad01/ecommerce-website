const asyncHandler = (requesHandler) => {
    return (req, res, next) => {
        Promise.resolve(requesHandler(req, res, next))
            .then((err) => next(err))
    }
}

module.exports = asyncHandler