const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, enxt))
            .catch((err) => next(err))
    }
}

export { asyncHandler }