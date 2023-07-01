import { Schema,model } from "mongoose";

const Brand = new Schema({
    Age:{
        type : String,
    },
    SkinType:{
        type : String,
    },
    BrandName:{
        type : String,
        required : true,
    },
    Trail:{
        type : String,
        required : true,
    },
    ProductName:{
        type : String,
    },
    ProductImage:{
        type : String,
        required : true,
    },
    ProductType:{
        type : String,
    },
    Description:{
        type : String,
        required : true,
    },
    ProductQuantity:{
        type : String,
        required : true,
    },
    ProductPrice:{
        type : String,
        required : true,
    },
    BrandObj:{
        type : Object,
        required : true,
    },
    id:{
        type : String,
    }

});

const BrandModel = model("Brand", Brand);
export default BrandModel;


