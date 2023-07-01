import { mongoose, Schema, model } from "mongoose";
import validator from "validator";

const Userschema = new Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
      validate: validator.isEmail,
      unique: true,
    },
    Password: {
      type: String,
      required : true,
    },
    Phone: {
      type: String,
      unique: true,
    },
    Position: {
      type: String,
      required: true,
      unique: false,
    },
  }
);

const UserModel = model("Users", Userschema);
export default UserModel;
