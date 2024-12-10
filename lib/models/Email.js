import mongoose, { Schema } from "mongoose";

const EmailSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
});
const EmailModel =
  mongoose.models.Email || mongoose.model("Email", EmailSchema);
export default EmailModel;
