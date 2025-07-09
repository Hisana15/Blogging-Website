import mongoose from "mongoose";
const blogSchema = new mongoose.Schema(
  {
    title: String,
    excerpt: String,
    content: String,
    author: { type: mongoose.Types.ObjectId, ref: "User" },
    Image: String,
  },
  { timestamps: true }
);

const Blog = mongoose.model("Blog", blogSchema);

export default Blog;
