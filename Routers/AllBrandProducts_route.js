import express from 'express';
import BrandModel from '../models/BrandModel.js';

const allprod = express.Router();

allprod.get('/:id/:name',async(req,res)=>{
    const {id} = req.params;
    console.log(id);

    try {
        const findingProd = await BrandModel.find({id: id});

        if(findingProd){
            console.log(findingProd)
            res.status(201).json(findingProd);
        }

    } catch (error) {
        console.log(`error in allprod ${error}`)
    }
});

export default allprod;