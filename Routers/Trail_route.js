import express from 'express';
import BrandModel from '../models/BrandModel.js';

const trails = express.Router();

trails.get('/TrailProducts',async(req,res)=>{
    try {
        const prods = await BrandModel.find({Trail:"yes"}).sort({createdAt:-1}).limit(20);

        if(prods.length>0){
            res.status(201).json(prods);
        }else{
            res.status(201).json("not products found");
        }
        
    } catch (error) {
        console.log(`error in allprods ${error}`);
    }
});

export default trails;