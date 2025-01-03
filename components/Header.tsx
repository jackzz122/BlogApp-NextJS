"use client";
import { FaMicroblog } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
const Links: {
  name: string;
  href: string;
}[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Design",
    href: "/design",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];
export default function Header() {
  const pathName = usePathname();
  const token = Cookies.get("token");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (token !== undefined) {
      setIsLoggedIn(true);
    }
  }, [token]);
  return (
    <header className="flex items-center gap-3 justify-between mx-10 mt-4">
      <Link href="/" className="header__logo flex items-center gap-2 text-2xl">
        <FaMicroblog />
        <p className="font-medium ">Blog</p>
      </Link>
      <div className="header__nav">
        <ul className="flex items-center gap-6 ">
          {Links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.href}
                className={clsx("text-gray-500 font-semibold", {
                  "text-gray-900 font-bold text-2xl": pathName === link.href,
                })}
              >
                {link.name}
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        {isLoggedIn ? (
          <>
            <FaSearch className="cursor-pointer" />
            <button className="bg-black px-3 py-2 text-white font-bold rounded-lg">
              Buy Now
            </button>
            <div>
              <button
                onClick={() => {
                  Cookies.remove("token");
                  setIsLoggedIn(false);
                  window.location.reload();
                }}
                className="bg-white px-3 py-2 text-black font-bold rounded-lg border border-gray-500"
              >
                LogOut
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="bg-black text-white px-3 py-2 font-bold border border-black hover:bg-white hover:text-black transition-all duration-150 ease-in"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="bg-white text-black border border-black px-3 py-2 font-bold hover:text-white hover:bg-black transition-all duration-150 ease-in"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
