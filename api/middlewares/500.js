const { errorJson } = require("../../helpers");

const debug = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json(errorJson(err));
}

function routeErrorHandler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = async function (req, res, next) {
        try {
            await originalFunction.call(this, req, res, next);
        } catch (error) {
            next(error);
        }
    };
    return descriptor;
}

module.exports = { debug, routeErrorHandler }