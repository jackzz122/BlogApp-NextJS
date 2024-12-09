import BlogList from "@/components/Blog/BlogList";

export default function Home() {
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
        <form className="homePage__type mt-10 flex items-center justify-center ">
          <div className="shadow-[-10px_10px_0px_#000000]">
            <input
              type="text"
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
        <BlogList />
      </div>
    </>
  );
}
