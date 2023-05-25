const notFound = (req,res,next)=>{
    const err = new Error("not found");
    res.status(404).json({
        msg : err
    });
    next(err);
}

const errorHandler = (err,req,res,next)=>{
    let status = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        status = 404;
        message = 'resource not found';
    }

    res.status(status).json({
        message,
        stack : process.env.NODE_ENV === 'development' ? err.stack : null
    })
}

export {
    notFound,
    errorHandler
}