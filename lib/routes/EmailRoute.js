import express from "express";
import bodyParser from "body-parser";
import Email from "../models/Email.js";
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.post("/add", async (req, res) => {
  const { email } = req.body;
  const emailCreated = await Email.create({
    email: email,
  });
  res
    .status(201)
    .json({ msg: "subcription successfully", email: emailCreated });
});

export default router;
