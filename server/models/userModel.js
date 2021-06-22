import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  favorites:{type:[Object],default:[]},
  isActive: { type: Boolean, default: true },
});

const userModel = new mongoose.model("users", userSchema);

export default userModel;
