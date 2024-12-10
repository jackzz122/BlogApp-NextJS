import express from "express";
import User from "../routes/UserRoute.js";
import multer from "multer";
import bodyParser from "body-parser";
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.use(bodyParser.urlencoded({ extended: true }));
router.get("", (req, res) => {
  res.json({ msg: "You are in User routes" });
});
router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  await User.deleteById(id);
});
router.put("/update", upload.single("author_image"), async (req, res) => {});
export default router;
