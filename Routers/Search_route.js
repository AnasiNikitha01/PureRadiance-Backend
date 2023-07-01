import express from 'express';
import BrandModel from '../models/BrandModel.js';

const search = express.Router();

search.get('/search/:problem/SkinProblem',async(req,res)=>{
   
    try {
        const problems = await BrandModel.find();
        if(problems){
            res.status(201).json(problems);
        }
    } catch (error) {
        console.log(`error in search_route ${error}`)
    }

})

export default search;