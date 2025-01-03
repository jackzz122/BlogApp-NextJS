"use client";

import { RegisterRoute } from "@/api/route";
import axios, { AxiosResponse, isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

interface UserType {
  username: string;
  phoneNumber: string;
  password: string;
}
export default function Page() {
  const router = useRouter();
  const [regisForm, setRegisForm] = useState<UserType>({
    username: "",
    phoneNumber: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisForm((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response: AxiosResponse = await axios.post(
        RegisterRoute,
        regisForm,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      if (response.status === 201) {
        alert("Register successfully");
        router.push("/");
      }
    } catch (err) {
      if (isAxiosError(err)) {
        alert("Exios Error: " + err.message);
      } else if (err instanceof Error) {
        alert("Something went wrong" + err.message);
      }
    }
  };
  return (
    <div className="w-[900px] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-10 mb-6">Register</h1>
      <form onSubmit={handleSubmit} className="">
        <label htmlFor="username" className="font-bold mb-2 block">
          Username
        </label>
        <input
          id="username"
          onChange={handleChange}
          type="text"
          value={regisForm.username}
          name="username"
          className="border border-black p-4 block w-full mb-5"
          placeholder="Enter your username"
        />
        <label htmlFor="phoneNumber" className="font-bold mb-2 block">
          Phone number
        </label>
        <input
          id="phoneNumber"
          type="text"
          value={regisForm.phoneNumber}
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
          name="password"
          value={regisForm.password}
          onChange={handleChange}
          className="border border-black p-4 block w-full mb-5"
          placeholder="Enter your Password"
        />

        <div className="w-full">
          <button
            type="submit"
            className="bg-black w-full text-white p-3 hover:text-black hover:bg-white transition-all ease-in border border-black hover:font-medium"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
