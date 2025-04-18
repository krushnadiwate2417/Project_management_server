const User = require('../models/authModel');
const jwt = require('jsonwebtoken');



exports.getAllUsers = async (req,res,next)=>{
    try {
        const users = await User.find();
        res.status(200).json({
            status : 'success',
            users 
        })
    } catch (error) {
        res.status(400).json({
            status : 'fail',
            error : error,
            message : error.message
        })
    }
}


exports.addUser = async (req,res,next)=>{
    try {
        const newUser = await User.create(req.body);
        const jsonToken = jwt.sign({id : newUser._id},process.env.SECRET_STR,{
            expiresIn : '1y'
        })
        res.status(201).json({
            status : 'success',
            token : jsonToken,
            newUser
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status : 'fail',
            error : error,
            message : error.message
        })
    }
}

exports.login = async (req,res,next)=>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({ email }).select("+password");
        const isMatch = await user.comparePassInDb(password, user.password);

        if(!user || !isMatch){
          return res.status(404).json({
                status : 'fail',
                message : 'User not Present or Wrong Password'
            })
        }

        const jsonToken = jwt.sign({id : user._id},process.env.SECRET_STR,{
            expiresIn : '1y'
        })
        res.status(200).json({
            status : 'success',
            token : jsonToken,
            user
        })


    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status : 'fail',
            error : error,
            message : error.message
        })
    }
}