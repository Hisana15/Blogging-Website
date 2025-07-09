import mongoose from "mongoose";

const userSchema = new mongoose.Schema({      //schema creation
  name: String,
  password: String,
  email: String,
},  { timestamps: true }

);

const User = mongoose.model("User",userSchema)    //table creation

export default User;