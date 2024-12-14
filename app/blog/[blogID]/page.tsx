import Image from "next/image";
import Link from "next/link";
import { TbMathGreater } from "react-icons/tb";
export default async function Page({
  params,
}: {
  params: Promise<{ blogID: string }>;
}) {
  const ID = (await params).blogID;
  const response = await fetch(`http://localhost:3030/blogs/${ID}`);
  const dataJSON = await response.json();
  const data = dataJSON.blog;
  return (
    <div>
      <div className="bg-gray-100 pt-2 ">
        <div className="flex items-center gap-1 mx-10 mt-5">
          <Link href="/" className="flex font-medium items-center gap-2">
            Home <TbMathGreater />{" "}
          </Link>
          <p className="flex font-medium items-center gap-2">{data.title}</p>
        </div>
        <div className="title_Blogs text-center mt-10">
          <p className="text-3xl font-medium">{data.title}</p>
        </div>
        <div className="Image_Blogs flex justify-center mt-5">
          <Image
            src={data.image}
            alt=""
            width={700}
            height={250}
            className="border border-gray-400 rounded-2xl"
          />
        </div>
        <div className="author_name flex items-center justify-center relative -translate-y-[60px]">
          <div>
            <Image
              src={data.author_image}
              alt=""
              width={250}
              height={350}
              className="border border-black rounded-full h-[120px] w-[120px]"
            />
            <p className="text-center text-xl font-serif">{data.author_name}</p>
          </div>
        </div>
      </div>
      <div className="Content w-[1200px] mx-auto">
        <i>Created at: {data.createAt}</i>
        <p>{data.content}</p>
      </div>
    </div>
  );
}
