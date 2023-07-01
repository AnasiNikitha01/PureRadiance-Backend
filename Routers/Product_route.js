import express from 'express';
import BrandModel from '../models/BrandModel.js';

const all_products = express.Router();

all_products.get('/products/get/:product',async(req,res)=>{
    const product = req.params.product;
    console.log(product);   
   
    try {
        const all = await BrandModel.find({ProductType : product});
        if(all){
            res.status(201).json(all);   
            console.log(all);
        }else if(err){
            res.status(500).json(err);
        }
  
    } catch (error) {
        console.log(`error in all_products ${error}`);
    }    
})

export default all_products;