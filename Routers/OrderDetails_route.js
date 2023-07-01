import express from 'express';
import mongoose from 'mongoose';
import OrderModel from '../models/CartModel.js';

const order_det = express.Router();

order_det.get('/:id/:index/OrderDetails',async(req,res)=>{
    const {id,index} = req.params;
    console.log(id,index);

    const objID = mongoose.Types.ObjectId;
    try {           
      const objectId = new objID(`${index}`);
        const getdetails = await OrderModel.find(objectId);
        if(getdetails.length>0){
            console.log(getdetails)
            res.status(200).json(getdetails);
        }
    } catch (error) {
        console.log(`error in get order details ${error}`)
    }
})

export default order_det;