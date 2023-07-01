import express from 'express';

const logout = express.Router();

logout.get('/logout',(req,res)=>{

    console.log(reached);
    res.cookie('token', '', { expires: new Date(0) });
  res.status(200).json('Logged out successfully');
})

export default logout;