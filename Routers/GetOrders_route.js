import express from 'express';
import OrderModel from '../models/CartModel.js';

const all_orders = express.Router();

all_orders.get('/Orders/get/:id',async(req,res)=>{
    var {id} = req.params;

        try {
            const getorder = await OrderModel.find({ Clients:id }).sort({createdAt:-1}).limit(20);
            if(getorder.length>0){
                console.log(getorder)
                res.status(200).json(getorder);
            }
        } catch (error) {
            console.log(`error in get orders ${error}`)
        }
})

export default all_orders;   