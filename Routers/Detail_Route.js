import express from 'express';
import BrandModel from '../models/BrandModel.js';
import mongoose from 'mongoose';

const Details = express.Router();

Details.get('/:postId/details',async(req,res)=>{
      const {postId} = req.params;
      console.log(postId);
      const objID = mongoose.Types.ObjectId;
      try {           
        const objectId = new objID(`${postId}`);
      const findPost = await BrandModel.findById(objectId);

      if(findPost){

        res.status(201).json(findPost);
       
           
      }else{   
        res.status(201).json("No post found");
      }
    } catch (error) {
        console.log(`error in details route ${error}`);
        res.status(400).json(error);
    }
})

export default Details;