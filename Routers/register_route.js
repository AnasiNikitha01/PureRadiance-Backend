import express from 'express';
import bcrypt from 'bcryptjs';
import UserModel from '../models/UserModel.js';


const register = express.Router();

const salt = bcrypt.genSaltSync(15);

register.post('/register',async(req,res)=>{
       
    const { Name,Email,Password,Position,Phone } = req.body;

    console.log(Name,Email,Password,Position);

    try {
       let user = await UserModel.create({
        Name,
        Email,
        Password: bcrypt.hashSync(Password,salt),
        Phone,
        Position
       });

        res.status(201).json(user);

    } catch (error) {
        res.status(400).json("error creating registration");
        console.log(`error in register route ${error}`);
    }
})

export default register;