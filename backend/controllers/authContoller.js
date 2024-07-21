
const User = require('../models/auth')
const bcrypt =require('bcryptjs');
const jwt =require ('jsonwebtoken');



exports.signup = async (req ,res)=>{
    try{
        const {name,email,password} = req.body;
        const existinguser = await User.findOne({email:email});
        if(existinguser){
            return res.status(400).json({message: 'User already exists'})
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({name,email,password:hashedPassword});
        await user.save();

        const token = jwt.sign({userId:newUser._id} ,process.env.JWT_SECRET, { expiresIn: '1h' })
        res.status(201).json({message:'user created successfully'}, token);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }

};

exports.login = async (req ,res)=>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email:email});
        if(!user){
            return res.status(400).json({message: 'User not found'})
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            return res.status(401).json({message: 'Password is not valid'})
        }
        const token =jwt.sign({userId:newUser_.id}, process.env.JWT_SECRET, {expiresIn:'1hr'})
        res.status(200).json({message:'User logged in successfully'}, token);
    }
    catch(error){
        console.log(error);
        res.status(500).json({message:error.message})
    }
}