"use client";
import { Key, useEffect, useState } from "react";
import BlogItem from "./BlogItems";
import axios from "axios";
interface BlogType {
  _id: String;
  title: String;
  description: String;
  category: String;
  image: String;
  author_name: String;
  author_image: String;
  content: String;
  createAt: Date;
}
export default function BlogList() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);
  const getBlogList = async () => {
    const response = await axios.get("http://localhost:3030/blogs");
    const data = response.data;
    setBlogList(data.blogs);
  };
  useEffect(() => {
    getBlogList();
  }, []);
  console.log(blogList);
  return (
    <div className="flex  flex-wrap justify-around gap-7 ">
      {blogList.length > 0 ? (
        blogList.map((blog: BlogType, index: Key) => {
          return <BlogItem key={index} {...blog} />;
        })
      ) : (
        <div>No blog</div>
      )}
    </div>
  );
}
