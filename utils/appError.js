const winston = require('winston')
const logger = winston.createLogger({
    level:'error',
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: 'error.log'})
    ]
})

class AppError extends Error{
    constructor(message, statusCode){
        super(message)
        this.statusCode = statusCode
        this.status = 'fail'
        this.isOperational = true

        Error.captureStackTrace(this, this.constructor)
    }
}

const globalHandlerError = (error, req, res, next) =>{
    error.statusCode = err.statusCode || 500
    err.status = err.status || 'error'

    logger.error(err.message)
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        error: err
    })
}

module.exports = {
    AppError,
    globalHandlerError
}