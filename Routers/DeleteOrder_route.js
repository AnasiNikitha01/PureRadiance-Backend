import express from 'express';
import OrderModel from '../models/CartModel.js';
import mongoose from 'mongoose';

const delete_order = express.Router();

delete_order.delete('/:i/cancelOrder',async(req,res)=>{
    const {i} = req.params;
    console.log(i);
    const objID = mongoose.Types.ObjectId;
    try {           
      const objectId = new objID(`${i}`);
        var delete_Order = await OrderModel.findByIdAndDelete(objectId);
        if (delete_Order) {
            res.status(201).json({ message: 'Post deleted successfully' });
          } else {
            res.status(404).json({ error: 'Post not found' });
          }
    } catch (error) {
        console.log(`error in deletepost ${error}`)
    }
});

export default delete_order;