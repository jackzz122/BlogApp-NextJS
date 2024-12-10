"use client";
import axios, { AxiosResponse } from "axios";
import Image from "next/image";
import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
interface BlogType {
  title: String;
  description: String;
  category: String;
  image: File | null;
  author_name: String;
  author_image: File | null;
  content: String;
}
export default function Page() {
  const [image, setImage] = useState<File | null>(null);
  const [formBlog, setFormBlog] = useState<BlogType>({
    title: "",
    description: "",
    category: "",
    image: null,
    author_name: "admin",
    author_image: null,
    content: "",
  });
  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const imageFile = e.target.files?.[0];
    if (imageFile) {
      setImage(imageFile);
      setFormBlog((prevForm) => {
        return {
          ...prevForm,
          image: imageFile,
          author_image: imageFile,
        };
      });
    } else setImage(null);
  };
  const handleChangeForm = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormBlog((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formBlog.title as string);
    formData.append("description", formBlog.description as string);
    formData.append("category", formBlog.category as string);
    formData.append("author_name", formBlog.author_name as string);
    formData.append("content", formBlog.content as string);
    formData.append("image", formBlog.image as File);
    formData.append("author_image", formBlog.author_image as File);
    const response: AxiosResponse = await axios.post(
      "http://localhost:3030/blogs/add",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 201) {
      alert("Success");
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div className="mx-10 mt-5">
      <div className="homePage__email text-center">
        <p className="text-4xl font-bold">Design Blog</p>
        <p className="mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
          porro aperiam velit. Perspiciatis, labore.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <div className="w-2/3">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter title here..."
            onChange={handleChangeForm}
            value={formBlog.title as string}
            className="block w-full border border-gray-400 mb-5 mt-2 px-3 py-2"
          />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={handleChangeForm}
            placeholder="Enter description here..."
            value={formBlog.description as string}
            className="block w-full border border-gray-400 mb-5 mt-2 px-3 py-2"
          />
          <label htmlFor="category">Category</label>
          <select
            onChange={handleChangeForm}
            name="category"
            id="category"
            value={formBlog.category as string}
            className="block w-full border border-gray-400 mb-5 mt-2 px-3 py-2"
          >
            <option value="" hidden>
              Choose category
            </option>
            <option value="Technology">Technology</option>
            <option value="Market">Market</option>
            <option value="Stock">Stock</option>
            <option value="Engineer">Engineer</option>
          </select>

          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            onChange={handleChangeForm}
            value={formBlog.content as string}
            placeholder="Enter content here..."
            className="block w-full border border-gray-400 mb-5 mt-2 px-3 py-2"
          />
        </div>
        <div className="w-1/3">
          <p>Choose Image for blog</p>
          <label htmlFor="image">
            {image !== null ? (
              <Image
                src={URL.createObjectURL(image)}
                alt=""
                width={300}
                height={120}
                className="h-[200px] mb-5 mt-2"
              />
            ) : (
              <div className="border border-dotted  border-gray-400 w-[300px] h-[200px] mb-5 mt-2  flex items-center justify-center cursor-pointer">
                <div className="text-center">
                  <FaCloudUploadAlt className="text-5xl translate-x-1/2" />
                  <p>Upload Image</p>
                </div>
              </div>
            )}
          </label>

          <input
            onChange={handleChangeImage}
            type="file"
            id="image"
            name="image"
            hidden
            required
          />
          <div className="mb-20"></div>
          <button
            type="submit"
            className="bg-black text-white px-3 py-2 font-medium  hover:text-black hover:bg-white transition-all ease-in duration-150 border border-black rounded-xl"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
}
