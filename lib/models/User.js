import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    max: 16,
    min: 8,
    required: true,
  },
  phoneNumber: {
    type: String,
    max: 10,
    unique: true,
    required: true,
  },
});
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
