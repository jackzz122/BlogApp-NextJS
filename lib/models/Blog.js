import mongoose from "mongoose";

const BlogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  createAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  author_name: {
    type: String,
    required: true,
  },
  author_image: {
    type: String,
    required: true,
  },
  image: {
    type: string,
    required: true,
  },
});

const BlogModel = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default BlogModel;
