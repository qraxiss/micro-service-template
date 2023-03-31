const notFound = (req, res, next) => {
    const error = new Error("That endpoint doesn't exist. Route not found");
    error.status = 404;
    next(error);
}

module.exports = { notFound }
