import express from "express";
import BlogModel from "../models/Blog.js";
import bodyParser from "body-parser";
import multer from "multer";
import fs from "fs/promises";
const upload = multer({ dest: "uploads/" });
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.get("/", async (req, res) => {
  const blogList = await BlogModel.find();
  console.log(blogList);
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
router.patch("/update", (req, res) => {});
export default router;

// async function run() {
//   await BlogModel.insertMany([
//     {
//       title: "Learn with nextJS",
//       description: "Hard but effective",
//       content: "Nice One",
//       category: "Technology",
//       author_name: "admin",
//       author_image: "./author_avatar.png",
//       image: "../../public/chef.jpg",
//     },
//   ]);
// }
// run();
