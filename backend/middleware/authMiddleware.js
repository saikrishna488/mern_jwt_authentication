import jwt from 'jsonwebtoken'
import user from '../models/userModel.js'
import asyncHandler from 'express-async-handler'

const protect = asyncHandler(async (req, res, next) => {
    let token = req.cookies.jwt;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await user.findById(decoded.userId).select('-password');
            next();

        }
        catch (err) {
            res.status(401);
            throw new Error(err);
        }
    }
    else {
        res.status(401);
        throw new Error("not logged in")
    }
});

export {
    protect
}