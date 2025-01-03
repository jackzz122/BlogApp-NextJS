"use client";
import { Key, useEffect, useState } from "react";
import BlogItem from "./BlogItems";
import axios from "axios";
interface BlogType {
  _id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  author_name: string;
  author_image: string;
  content: string;
  createAt: Date;
}
export default function BlogList() {
  const [blogList, setBlogList] = useState<BlogType[]>([]);
  const getBlogList = async () => {
    try {
      const response = await axios.get("http://localhost:3030/blogs");
      const data = response.data;
      setBlogList(data.blogs);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getBlogList();
  }, []);
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
