"use client";

import { loginRoute } from "@/api/route";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
interface UserType {
  phoneNumber: string;
  password: string;
}
export default function Page() {
  const router = useRouter();
  const [loginForm, setLoginForm] = useState<UserType>({
    phoneNumber: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginRoute, loginForm, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      if (response.status === 200) {
        router.push("/");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-[900px] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="phoneNumber" className="font-bold mb-2 block">
          Phone number
        </label>
        <input
          id="phoneNumber"
          type="text"
          value={loginForm.phoneNumber}
          name="phoneNumber"
          onChange={handleChange}
          className="border border-black p-4 block w-full mb-5"
          placeholder="Enter your Phone number"
        />
        <label htmlFor="password" className="font-bold mb-2 block">
          Password
        </label>
        <input
          id="password"
          type="text"
          value={loginForm.password}
          name="password"
          onChange={handleChange}
          className="border border-black p-4 block w-full mb-5"
          placeholder="Enter your Password"
        />

        <div className="w-full">
          <button
            type="submit"
            className="bg-black w-full text-white p-3 hover:text-black hover:bg-white transition-all ease-in border border-black hover:font-medium"
          >
            Login
          </button>
        </div>
        <div>
          <p className="mt-2">
            Dont have account ?{" "}
            <span
              onClick={() => router.push("/register")}
              className="font-bold cursor-pointer"
            >
              Register Here
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}
