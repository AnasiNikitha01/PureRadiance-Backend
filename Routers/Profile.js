import express from "express";
import jwt from "jsonwebtoken";

const profile_user = express.Router();

profile_user.get('/profiles',(req,res)=>{
    const {token} = req.cookies;
    console.log("token"+ token);
    
    jwt.verify(token,process.env.Secret_key,{},(err,data)=>{
       try { 
        console.log(data)             
              res.status(200).json(data);
              if(err){
                console.log(err)
                res.status(500).json(err);
              }
       } catch (error) {
        res.status(500).json(error)
             console.log(`error in profile ${error}`);
       }
   })
    
})

export default profile_user;