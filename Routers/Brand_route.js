import express from 'express';
import BrandModel from '../models/BrandModel.js';
import multer from "multer";
import fs from "fs";

const brandForm = express.Router();

const upload = multer({ dest: './Uploads'}) //uploading files to seperate file


brandForm.post('/:id/brandform',upload.single('ProductImage'),async(req,res)=>{
      
    const file = req.file; // Access the uploaded file object
  
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const origin = file.originalname;
    console.log(origin)
    const path = file.path;

    const divide = origin.split('.');  //removing the extention of the file and attaching it the files saved in uploads

    const File_extension = divide[divide.length -1];  

    const newPath = path+'.'+File_extension;
    
    fs.renameSync(path, newPath);  //to rename the file with extention
 



    const {Age,
             SkinType,
             BrandName,
             ProductName,
             ProductType,
             Description,
             Trail,
             BrandObj,ProductQuantity,ProductPrice} = req.body;

             const {id} = req.params;
             console.log(id);

       try {
             
          let brandform = await BrandModel.create({
            Age,
            SkinType,
            BrandName,
            ProductName,
            ProductType,
            ProductImage:newPath,
            Description,
            Trail,
            id,
            BrandObj,
            ProductPrice,
            ProductQuantity
          })
             
          res.status(201).json({brandform,id});
          console.log(brandform);
        
       } catch (error) {
          res.status(400).json(error);
          console.log(`error in brand route ${error}`);
       }      
});

export default brandForm;