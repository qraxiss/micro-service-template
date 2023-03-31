const { errorJson } = require("./errorJson");


function errorHandler(target, name, descriptor) {
    const originalFunction = descriptor.value;
    descriptor.value = async function (...args) {
        try {
            const result = await originalFunction.apply(this, args);
            return result;
        } catch (error) {
            const err = errorJson(error)
            return err;
        }
    }
    return descriptor;
}

module.exports = errorHandler