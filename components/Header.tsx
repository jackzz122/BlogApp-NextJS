import { FaMicroblog } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
export default function Header() {
  const isLogin = false;
  return (
    <header className="flex items-center gap-3 justify-between mx-10 mt-4">
      <div className="header__logo flex items-center gap-2 text-2xl">
        <FaMicroblog />
        <p className="font-medium ">Blog</p>
      </div>
      <div className="header__nav">
        <ul className="flex items-center gap-7 ">
          <Link href="/" className="text-gray-500 font-semibold">
            Home
          </Link>
          <Link href="/" className="text-gray-500 font-semibold">
            About
          </Link>

          <Link href="/desgin" className="text-gray-500 font-semibold">
            Design
          </Link>
          <Link href="/contact" className="text-gray-500 font-semibold">
            Contact
          </Link>
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {isLogin ? (
          <>
            <FaSearch className="cursor-pointer" />
            <button className="bg-black px-3 py-2 text-white font-bold rounded-lg">
              Buy Now
            </button>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="bg-black text-white px-3 py-2 font-bold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white text-black border border-black px-3 py-2 font-bold"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
