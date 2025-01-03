import express from "express";
import bcrypt from "bcrypt";
import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
const router = express.Router();
const salt = bcrypt.genSaltSync(10);
const secret = "qweasdqwe123qwiepqwoei123";
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/login", async (req, res) => {
  const { phoneNumber, password } = req.body;
  const userResult = await UserModel.findOne({ phoneNumber: phoneNumber });
  if (userResult === null) {
    res.status(404).json({ message: "User not found" });
  } else {
    const passOK = bcrypt.compareSync(password, userResult.password);
    if (!passOK) {
      res.status(400).json({ message: "Password is incorrect" });
    } else {
      jwt.sign(
        { phoneNumber, id: userResult._id },
        secret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).status(200).json("OK");
        }
      );
    }
  }
  // res.status(200).json({ user: userResult });
});
router.post("/register", async (req, res) => {
  const { username, phoneNumber, password } = req.body;
  const user = await UserModel.create({
    username: username,
    phoneNumber: phoneNumber,
    password: bcrypt.hashSync(password, salt),
  });
  jwt.sign({ username, id: user._id }, secret, {}, (err, token) => {
    if (err) throw err;
    res
      .cookie("token", token)
      .status(201)
      .json({ msg: "Created account successfully", token: token });
  });
});

export default router;
