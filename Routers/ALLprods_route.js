import express from 'express';
import BrandModel from '../models/BrandModel.js';

const all = express.Router();

all.get('/allProducts',async(req,res)=>{
    try {
        const prods = await BrandModel.find().sort({createdAt:-1}).limit(20);

        if(prods.length>0){
            res.status(201).json(prods);
        }else{
            res.status(201).json("not products found");
        }
        
    } catch (error) {
        console.log(`error in allprods ${error}`);
    }
});

export default all;