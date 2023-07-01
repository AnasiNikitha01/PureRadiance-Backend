import { Schema,model } from "mongoose";

const Cart = new Schema({
   products:{
      type: Array,
   },
   Address:{
      type : Object, 
   },
   payment:{
      type : String,
   },
   Clients:{
    type : String,
   },
   sum:{
      type : String, 
   }
   
},
{ timestamps:true }
);

const OrderModel = model("Orders", Cart);
export default OrderModel;


