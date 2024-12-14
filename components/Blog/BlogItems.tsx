import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
export default function BlogItem({
  _id,
  title,
  description,
  category,
  author_name,
  author_image,
  image,
  content,
  createAt,
}: {
  _id: string;
  title: string;
  description: string;
  category: string;
  author_name: string;
  author_image: string;
  image: string;
  content: string;
  createAt: Date;
}) {
  const date = new Date(createAt);
  return (
    <Link
      href={`/blog/${_id}`}
      className="w-[450px]  h-[450px] border  border-black hover:shadow-[-10px_10px_0px_#000000] transition-all ease-in duration-150"
    >
      <Image
        src={image as string}
        width={250}
        height={180}
        alt=""
        className="w-full h-[200px] border border-black"
      />
      <div className="px-2 mt-5 flex flex-col h-[220px] justify-between">
        <div>
          <div className="flex items-center gap-2">
            <p className="my-1 bg-black text-white px-2 py-1 w-fit rounded-lg">
              {category}
            </p>
            <p className="text-gray-400 text-sm">
              {date.toLocaleDateString("vi-VN")}
            </p>
          </div>
          <div className="title my-2">
            <p className=" text-xl font-bold">{title}</p>
          </div>
          <p className="text-sm">{content}</p>
        </div>
        <button className=" font-bold flex items-center gap-2">
          <p> Read More </p>
          <FaArrowRightLong className="" />
        </button>
      </div>
    </Link>
  );
}
