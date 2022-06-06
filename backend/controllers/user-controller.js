import User from "../model/User";
import bycrypt from 'bcryptjs';
//let alert = require('alert');
 import alert from 'alert';
export const getAllUser = async (req, res, next) => {
    let users;
    try {
        users = await User.find();
    } catch (err) {
        console.log(err);
    }

    if (!users) {
        return res.status(404).json({ message: "No User found" });
    }
    return res.status(200).json({ users });
};



export const signup = async (req, res, next) => {
    const { name, email, password } = req.body;//recievin flieds from dbs body. This is distructuring all

    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (existingUser) {
        
        alert("User Already Exist"); 
        return res.status(400).json({ message: "User Already Exist" });
    }
    
    const hashedPassword = bycrypt.hashSync(password);
    const user = new User({
        name,
        email,
        password : hashedPassword,
        blogs:[],
    });


    try {
        await user.save();
    } catch (err) {
        return console.log(err);
    }

    return res.status(201).json({ user });
};



export const login = async (req, res, next) => {
    const { email, password } = req.body;

    //checking wheather user is there or not
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log(err);
    }

    if (!existingUser) {
        
        alert("Couldn't find user by this email"); 
        return res.status(404).json({ message: "Couldn't find user by this email" });
    }
    
    //checking pasword from db
    const isPasswordCorrect = bycrypt.compareSync(password, existingUser.password);
    if(!isPasswordCorrect){
        alert("Incorrect Password"); 
        return res.status(400).json({ message: "Incorrect Password" });
    }
    
    return res.status(200).json({ message: "Login Succesfully",user:existingUser });
};

