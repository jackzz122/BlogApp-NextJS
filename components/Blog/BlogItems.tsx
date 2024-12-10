import Image from "next/image";

export default function BlogItem() {
  return (
    <div className="w-[450px] h-[450px] border border-black hover:shadow-[-10px_10px_0px_#000000] transition-all ease-in duration-150">
      <Image
        src="/chef.jpg"
        width={250}
        height={180}
        alt=""
        className="w-full h-[200px] border border-black"
      />
      <div className="px-2 mt-5">
        <p className="my-1 bg-black text-white px-2 py-1 w-fit rounded-lg">
          Life Style
        </p>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro ullam
          ipsum at maxime eaque, autem necessitatibus nam repellendus non beatae
        </p>
        <button className="mt-2 font-bold flex items-center">Read More</button>
      </div>
    </div>
  );
}
