import express from 'express';
import UserModel from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



const login = express.Router();

login.post('/login',async(req,res,next)=>{

    const {Email,Password ,Position} = req.body;

    try{

    const findUser =await UserModel.findOne({Email});

    const pass_Compare = bcrypt.compareSync(Password,findUser.Password);

    if(pass_Compare){
        console.log("done login");
        jwt.sign({Email,id:findUser._id,Position},process.env.Secret_key,{},(err,token)=>{
        if(err) throw err;
        res.cookie('token',token).json({
            Email,
            id:findUser._id,
            position: findUser.Position,
        })   
     })
    }else{
        res.status(400).json("Incorrect Password");
        console.log("wrong password");
    }

      


     }catch(error){
        res.status(400).json("error creating login");
        console.log(`error in login route ${error}`);
    }
    next();
})

export default login;