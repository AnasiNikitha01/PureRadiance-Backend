import express from 'express';
import BrandModel from '../models/BrandModel.js';
import multer from 'multer';
import fs from 'fs';
import mongoose from 'mongoose';

const edit_prod = express.Router();

const upload = multer({ dest: './Uploads' });

edit_prod.put('/edit', upload.single('ProductImage'), async (req, res) => {
  let newPath = null;

  if (req.file) {
    const origin = req.file.originalname;
    const path = req.file.path;

    const divide = origin.split('.');
    const File_extension = divide[divide.length - 1];

    newPath = path + '.' + File_extension;

    fs.renameSync(path, newPath);
  }

  const {
    Age,
    SkinType,
    BrandName,
    ProductName,
    ProductType,
    Description,
    Trail,
    postId,
    BrandObj,
    ProductQuantity,
    ProductPrice
  } = req.body;

  

  try {
    const objectId = new mongoose.Types.ObjectId(postId);
    console.log(objectId);
    const PRODUCT = await BrandModel.findById(objectId);

    const updatedProduct = await PRODUCT.updateOne(
      {
        Age,
        SkinType,
        BrandName,
        ProductName,
        ProductType,
        ProductImage : newPath ? newPath : PRODUCT.ProductImage,
        Description,
        Trail,
        BrandObj,
        ProductPrice,
        ProductQuantity
      }
    );

    if (updatedProduct) {
      res.status(201).json(updatedProduct);
    } else {
      console.log('Error updating product');
    }
  } catch (error) {
    res.status(400).json(error);
    console.log(`error in edit route ${error}`);
  }
});

export default edit_prod;
