const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, enxt))
            .catch((err) => next(err))
    }
}

export { asyncHandler }