import express from 'express';
import BrandModel from '../models/BrandModel.js';

const prod_disp = express.Router();

prod_disp.get('/:id/brandProducts',async(req,res)=>{
    const {id} = req.params; 

    // console.log(id);

    try {

        const display =await BrandModel.find({id : id}).sort({createdAt:-1}).limit(20);

        if(display){
            res.status(200).json(display);
        }else{
            res.status(200).json("No posts found");
        }
        
    } catch (error) {
        console.log(`error in prod display ${error}`);
        res.status(400).json(error);
    }
});

export default prod_disp;