"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-between items-center p-4">
      <div>
        <Image src="/images/logo.png" alt="logo" width={100} height={100} />
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Blog</Link>
          </li>
          <li>
            <Link href="#">Single Post</Link>
          </li>
          <li>
            <Link href="#">Pages</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-4 border px-2 py-1 rounded ">
        <input
          type="text"
          placeholder="Search"
          className="outline-none w-[calc(100%-2rem)]"
        />
        <button>
          <Search className="opacity-40" />
        </button>
      </div>
      <div>
        <div
          className="relative w-12 h-12 flex items-center justify-center cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Top Line */}
          <span
            className={`absolute w-8 h-1 bg-[#444] transition-transform ${
              isOpen
                ? "rotate-45 origin-center translate-y-0"
                : "-translate-y-2"
            } duration-500`}
          ></span>

          {/* Middle Line */}
          <span
            className={`absolute w-8 h-1 bg-[#444] transition-opacity ${
              isOpen ? "opacity-0" : "opacity-100"
            } duration-500`}
          ></span>

          {/* Bottom Line */}
          <span
            className={`absolute w-8 h-1 bg-[#444] transition-transform ${
              isOpen
                ? "-rotate-45 origin-center translate-y-0"
                : "translate-y-2"
            } duration-500`}
          ></span>
        </div>
        <nav className={`absolute top-16 right-0 bg-white p-4 rounded shadow-lg transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-500 ease-in-out md:hidden`}>
          <ul
            className="space-y-8 w-52 "
          >
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Single Post</Link>
            </li>
            <li>
              <Link href="#">Pages</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
