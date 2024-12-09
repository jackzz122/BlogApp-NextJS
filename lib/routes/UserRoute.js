import express from "express";
const router = express.Router();

router.get("", (req, res) => {
  res.json({ msg: "You are in User routes" });
});
export default router;
