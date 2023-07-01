import express from "express";
import BrandModel from "../models/BrandModel.js";
import mongoose from "mongoose";

const editbrand_route = express.Router();

editbrand_route.get('/:postId/getEdit/editpage',async(req,res)=>{
    const {postId} = req.params;
    console.log(postId);
    const objID = mongoose.Types.ObjectId;
    try {           
      const objectId = new objID(`${postId}`);
        const get = await BrandModel.findById(objectId);
        if(get){
            res.status(200).json(get)
        }else{
            res.status(200).json("no data")
        }
    } catch (error) {
        console.log(`error in getedit ${error}`)
    }
})

export default editbrand_route;