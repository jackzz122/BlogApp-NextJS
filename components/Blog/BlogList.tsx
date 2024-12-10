import BlogItem from "./BlogItems";

export default function BlogList() {
  return (
    <div className="flex  flex-wrap justify-around gap-7 ">
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
}
