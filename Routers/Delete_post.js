import express from 'express';
import BrandModel from '../models/BrandModel.js';
import mongoose from 'mongoose';

const deletepost = express.Router();

deletepost.delete('/:postId/Delete',async(req,res)=>{
    var {postId} = req.params;
    console.log(postId);
    const objID = mongoose.Types.ObjectId;
    try {           
      const objectId = new objID(`${postId}`);
        var delete_post = await BrandModel.findByIdAndDelete(objectId);
        if (delete_post) {
            res.status(201).json({ message: 'Post deleted successfully' });
          } else {
            res.status(404).json({ error: 'Post not found' });
          }
    } catch (error) {
        console.log(`error in deletepost ${error}`)
    }
});
       
export default deletepost;