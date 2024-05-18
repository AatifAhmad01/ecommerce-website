const asyncHanlder = (requesHandler) => {
    return (req, res, next) => {
        Promise.resolve(requesHandler(req, res, next))
            .then((err) => next(err))
    }
}

export default asyncHanlder