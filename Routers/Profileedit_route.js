import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/UserModel.js';

const edit_profile = express.Router();

edit_profile.put('/profileEdit/:id', async (req, res) => {
  const { id } = req.params;
  const { Name, Phone, Email } = req.body;
  console.log(id, Name);

  const objID = mongoose.Types.ObjectId;

  try {
    const objectId = new objID(`${id}`);
    let profile = await UserModel.findById(objectId);

    let finding = await profile.updateOne({
      Name,
      Email,
      Phone,
    });

    if (finding) {
      res.status(200).json(finding);
    }
  } catch (error) {
    console.log(`error in profile edit ${error}`);
  }
});

export default edit_profile;
