function errorHandling(err, req, res, next) {
    if(err) {
        const status = err.status || 500;
        res.status(status).json (
            {
                status: status,
                err: 'You encountered an error, attempt later again.'
            }
        )
    }
    next();
}

module.exports = {errorHandling};