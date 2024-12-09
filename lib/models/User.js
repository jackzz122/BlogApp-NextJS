import mongoose from "mongoose";

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    required: true,
  },
});
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
export default UserModel;
