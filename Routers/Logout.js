import express from 'express';

const logout = express.Router();

logout.post('/logout',(req,res)=>{
    res.cookie('token','').json('logged out');
})

export default logout;