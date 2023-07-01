import express from 'express';
import OrderModel from '../models/CartModel.js';

const Orders = express.Router();

Orders.post('/orders',async(req,res)=>{

    const {  cart,
        Address,
        payment,
        Clients,sum} = req.body;

        console.log(cart,Address,payment,Clients);
        try {
            const order_deatils = await OrderModel.create({
                products: cart,
                Address,
                payment,
                Clients,
                sum
            })
            res.status(201).json(order_deatils);
            console.log(order_deatils);
        } catch (error) {
            console.log(`error in orders ${error}`)
        }
});

export default Orders;      