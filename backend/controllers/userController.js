import asyncHandler from 'express-async-handler';
import User from "../models/userModel.js";
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        res.status(401);
        throw new Error("invalid credentials");
    }
    if (await bcrypt.compare(password, user.password)) {
        if (user) {
            let userId = user._id;
            const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            });
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                token
            });
        }
        else {
            res.status(401);
            throw new Error("invalid credentials");
        }
    }
    else {
        res.status(401);
        throw new Error("invalid credentials");
    }
});

const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
        res.status(404);
        throw new Error("user already exists");
    }
    else {
        const user = await User.create({
            name,
            email,
            password
        });

        if (user) {
            generateToken(res, user._id)
            res.status(200).json({
                _id: user._id,
                name: user.name,
                email: user.email
            });
        }
        else {
            res.status(404)
            throw new Error("error occured");
        }
    }


});

const logoutUser = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date()
    });
    res.status(200).json({
        message: "user logged out"
    })
});

const getUserprofile = asyncHandler(async (req, res) => {
    let data = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email
    }
    res.status(200).json(data);
});

const getProfile = asyncHandler(async (req, res) => {
    let token = req.params.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.userId).select('-password');
            res.json(req.user)
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

const updateUserprofile = asyncHandler(async (req, res) => {
    let user = await User.findById(req.body._id);
    if (user){
        const { name, email, password } = req.body

        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            if (password) {
                user.password = password || user.password;
            }

            const updatedUser = await user.save();
            res.status(200).json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email
            })
        }
        else {
            res.status(200).json({
                message: "user logged out"
            })
        }
    }
    else{
        console.log("id not provided");
    }

});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserprofile,
    updateUserprofile,
    getProfile
}