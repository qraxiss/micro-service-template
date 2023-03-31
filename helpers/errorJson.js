function errorJson(err) {
    if (process.env.NODE_ENV == 'debug'){
        var info = err
    }else if (process.env.NODE_ENV == 'production'){
        var info = {}
    }

    return {
        crashed: true,
        data: {
            error: err.message,
            info: info
        }
    }
}

module.exports = {
    errorJson
}