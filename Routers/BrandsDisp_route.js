import express from 'express';
import UserModel from '../models/UserModel.js';

const All_brands = express.Router();

All_brands.get('/brands',async(req,res)=>{
   try {
       
    const all = await UserModel.find({Position : 'Branding'});

    res.status(201).json(all);
    console.log(all);


   } catch (error) {
     console.log(`error in brandis ${error}`);
   }
})

export default All_brands;