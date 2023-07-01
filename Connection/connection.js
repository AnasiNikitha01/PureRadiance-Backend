import mongoose from "mongoose";

export async function connectDB(){
    try {
        const connect =await mongoose.connect(process.env.Mongo_url);
        console.log("connection setup done");
    } catch (error) {
        console.log(`mongo error ${error}`);
    }
}