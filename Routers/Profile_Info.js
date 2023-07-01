import express from 'express';
import UserModel from '../models/UserModel.js';
import mongoose from 'mongoose';


const profile_info = express.Router();

profile_info.get('/:id/profile',async(req,res)=>{
     
    const {id} = req.params;
    try {
        
        const objID = mongoose.Types.ObjectId;
        let objectId = new objID(`${id}`);
        
        console.log(objectId)
        
        const findid = await UserModel.findById({_id : id});
        if(findid){
        res.status(201).json(findid);
        console.log(findid)
        }
      
    } catch (error) {
            console.log(`error in profile_info ${error}`);        
    }


         
   
});

export default profile_info;