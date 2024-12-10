import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import UserRoute from "../routes/UserRoute.js";
import BlogRoute from "../routes/BlogRoute.js";
import AuthRoute from "../routes/AuthRoute.js";
import bodyParser from "body-parser";
const app = express();
const PORT = 3030;

app.use(cors());
app.use(bodyParser.json());

const ConnectDB = async () => {
  await mongoose.connect(
    `mongodb+srv://ducluongvuong500:LEyvLm0q0Epm5dls@cluster0.dhj89.mongodb.net/blogDB`
  );
};

ConnectDB();
app.use("/users", UserRoute);
app.use("/blogs", BlogRoute);
app.use("/auth", AuthRoute);
app.listen(3030, () => {
  console.log(`listening on port: ${PORT}`);
});
