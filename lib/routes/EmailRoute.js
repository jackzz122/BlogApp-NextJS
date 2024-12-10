import express from "express";
const router = express.Router();

router.post("/add", (req, res) => {
  res.json("Nice Emial");
});

export default router;
