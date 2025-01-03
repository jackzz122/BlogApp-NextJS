import express from "express";
import bodyParser from "body-parser";
import Email from "../models/Email.js";
import nodemailer from "nodemailer";
const router = express.Router();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vuongducluong0369@gmail.com",
    pass: "luong12345",
  },
});

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
router.post("/send_mail", (req) => {
  const { email } = req.body;
  var mailOptions = {
    from: "vuongducluong0369@gmail.com",
    to: email,
    subject: "Thanks for using out blogs",
    text: "That was a great message",
  };
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log("Email Sent: " + info.response);
  });
});
export default router;
