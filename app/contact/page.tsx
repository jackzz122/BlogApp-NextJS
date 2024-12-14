"use client";
import Image from "next/image";

export default function Page() {
  return (
    <div className="mx-10 my-10">
      <div className="flex gap-10">
        <div className="w-1/2">
          <h1 className="font-medium uppercase text-2xl">Contact Us</h1>
          <p className="text-2xl text-gray-400 text-justify mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque cum
            veniam, nihil molestiae, odit temporibus doloribus expedita sunt
            esse nostrum ipsum iusto ad! Odio explicabo temporibus a quas,
            repellendus numquam!
          </p>
        </div>
        <div className="image w-1/2">
          <Image
            src="/caLLIng.jpg"
            width={700}
            height={200}
            alt=""
            className="rounded-2xl"
          />
        </div>
      </div>
      <br />
      <div className="getInTouch">
        <p className="text-2xl font-bold ">Get in touch</p>
        <form action="" className="mt-3">
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="contact_input w-[350px] h-[64px]"
              name="name"
              placeholder="Name"
            />
            <input
              type="text"
              className="contact_input w-[350px] h-[64px]"
              name="email"
              placeholder="Email"
            />
          </div>
          <input
            type="text"
            className="contact_input mt-4 w-[710px] h-[64px]"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="contact_input mt-4 w-[710px] h-[200px] p-2"
            placeholder="Message"
          />
          <button
            type="submit"
            className="bg-black text-white font-medium px-3 py-2 mt-2 rounded-xl"
          >
            Finish and Submit
          </button>
        </form>
      </div>
    </div>
  );
}
