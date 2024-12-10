"use client";

import { useState } from "react";

interface UserType {
  username: string;
  phoneNumber: string;
  password: string;
}
export default function Page() {
  const [loginForm, setLoginForm] = useState<UserType>({
    username: "",
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
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className="w-[900px] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="username" className="font-bold mb-2 block">
          Username
        </label>
        <input
          id="username"
          onChange={handleChange}
          type="text"
          name="username"
          value={loginForm.username}
          className="border border-black p-4 block w-full mb-5"
          placeholder="Enter your username"
        />
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
      </form>
    </div>
  );
}
