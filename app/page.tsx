"use client";
import BlogList from "@/components/Blog/BlogList";
import Link from "next/link";
import { FormEvent, useState } from "react";
import axios, { AxiosResponse } from "axios";
interface EmailType {
  email: string;
}
export default function Home() {
  const [emailBlog, setEmailBlog] = useState<EmailType>({
    email: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEmailBlog((prevMail) => {
      return {
        ...prevMail,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.post(
        "http://localhost:3030/email/add",
        emailBlog,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 201) {
        alert("Subcription sent successfully");
        setEmailBlog({
          email: "",
        });
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.log("Axios error: " + err);
        if (err.response) {
          console.error("Response Data: ", err.response.data);
        }
      } else if (err instanceof Error) {
        console.error("Error: ", err.message);
      } else {
        console.log("Unknown: ", err);
      }
    }
  };
  return (
    <>
      <div className="mx-10 my-5">
        <div className="homePage__email text-center">
          <p className="text-4xl font-bold">Blog Post</p>
          <p className="mt-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae eius
            porro aperiam velit. Perspiciatis, labore.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="homePage__type mt-10 flex items-center justify-center "
        >
          <div className="shadow-[-10px_10px_0px_#000000]">
            <input
              type="text"
              name="email"
              value={emailBlog.email}
              onChange={handleChange}
              className="border border-gray-600 w-[450px] px-3 py-2 "
              placeholder="Enter your email to subcribe "
            />
            <button
              type="submit"
              className="bg-white text-black border border-l-0 border-gray-600 px-3 py-[8px] hover:bg-black hover:text-white transition-all duration-150 ease-in"
            >
              Subcribe
            </button>
          </div>
        </form>
        <div className="mb-10"></div>
        <div className="blogType my-10 flex justify-center gap-5">
          <Link href="/">Techonology</Link>
          <Link href="/">Market</Link>
          <Link href="/">Stock</Link>
          <Link href="/">Engineer</Link>
        </div>
        <BlogList />
      </div>
    </>
  );
}
