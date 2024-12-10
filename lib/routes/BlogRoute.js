import express from "express";
import BlogModel from "../models/Blog.js";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs/promises";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", async (req, res) => {
  const blogList = await BlogModel.find({});
  res.status(200).json({ blogs: blogList });
});

async function createFilePathForFrontEnd(file) {
  const timeStamp = Date.now();
  const oldPath = file.path;
  const path = `./public/${timeStamp}_${file.originalname}`;
  await fs.rename(oldPath, path);
  const urlImage = `/${timeStamp}_${file.originalname}`;
  return urlImage;
}

router.post(
  "/add",
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
    {
      name: "author_image",
      maxCount: 1,
    },
  ]),
  async (req, res) => {
    const imageFile = req.files["image"];
    const authorImage = req.files["author_image"];
    const urlImage = await createFilePathForFrontEnd(imageFile[0]);
    const urlAuthor = await createFilePathForFrontEnd(authorImage[0]);
    const { title, description, content, category, author_name } = req.body;

    await BlogModel.create({
      title: title,
      description: description,
      content: content,
      category: category,
      author_image: urlAuthor,
      image: urlImage,
      author_name: author_name,
    });
    res.status(201).json({ urlImage: urlImage, urlAuthor: urlAuthor });
  }
);
router.delete("/delete", async (req, res) => {
  const { id } = req.body;
  try {
    await BlogModel.findByIdAndDelete(id);
    res.json({ msg: "Delete successfully" });
  } catch (err) {
    res.status(404).json({ msg: err.message });
  }
});
router.put("/update", upload.single("image"), async (req, res) => {
  let imgUrl = null;
  if (req.file) {
    const imageFile = req.file;
    const urlImage = await createFilePathForFrontEnd(imageFile[0]);
    imgUrl = urlImage;
  }
  const { id, title, description, content, category, author_name } = req.body;
  await BlogModel.findById(id).updateOne({
    title,
    description,
    content,
    category,
    author_name,
  });
  const results = await BlogModel.findById(id);
  res.status(201).json({ mgs: "Success", new: results });
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const blogResult = await BlogModel.findById(id);
  res.status(200).json({ blog: blogResult });
});
router.get("/type/:type", async (req, res) => {
  const type = req.params.type;
  const filterRes = await BlogModel.find({ category: type });
  res.status(200).json({ blogListType: filterRes });
});
export default router;
