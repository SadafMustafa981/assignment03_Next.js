'use client'
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className="bg-pink-400">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl"> My Flower Shop</span>
          </a>
          <button
          onClick={() => setIsopen(!isopen)}
          className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 md:hidden focus:outline-none">
            <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="https://www.w3.org/2000/svg"
            >
              <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isopen ? "M6 18L18 6M6 6112 12 M4: 6h16M4 12h 16M4 18h16"}
              ></path>
            </svg>
          </button>

           <nav
           className={`$ 
            isOpen ? "block" : "hidden"
           } md:flex md:items-center text-base justify-center w-full md:w-auto`}
           >
            <Link href="/" className="mr-5 hover:text-gray-900">
            Home
            </Link>
            <Link href="/About" className="mr-5 hover:text-gray-900">
            About
            </Link>
            <Link href="/Overservices" className="mr-5 hover:text-gray-900">
            Overservices
            </Link>
            <Link href="/Contact" className="mr-5 hover:text-gray-900">
            Contact
            </Link>
            </nav>
        </div>
      </header>
    </div>
  );
}
