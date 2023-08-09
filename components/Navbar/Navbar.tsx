"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const navHandler = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#fff");
        setTextColor("#000");
      } else {
        setColor("transparent");
        setTextColor("#fff");
      }
    };
    window.addEventListener("scroll", changeColor);
  });

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1280px] m-auto flex justify-between items-center p-4">
        <Link href={"/"}>
          <h1
            style={{ color: `${textColor}` }}
            className="font-bold text-pink-600 border-pink-300 text-4xl p-2 bg-pink-300/50 rounded-md cursor-pointer"
          >
            SFS👛
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="sm:flex hidden">
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/dashboard"}>Dashboard</Link>
          </li>
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/products"}>products</Link>
          </li>
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/login"}>Login</Link>
          </li>
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/signup"}>Signup</Link>
          </li>
          <li className="px-3 py-2 hover:bg-pink-400 rounded-md cursor-pointer">
            <Link href={"/cart"}>Cart</Link>
          </li>
        </ul>
        {/* Mobile Buttons */}
        <div className="block sm:hidden z-10" onClick={navHandler}>
          {nav ? (
            <AiOutlineClose style={{ color: `${textColor}` }} size={20} />
          ) : (
            <AiOutlineMenu style={{ color: `${textColor}` }} size={20} />
          )}
        </div>
        <div
          className={
            nav
              ? "sm:hidden absolute right-0 left-0 bottom-0 top-0 justify-center flex items-center w-full h-screen text-center bg-black ease-in duration-300"
              : "sm:hidden absolute right-0 left-[-100%] bottom-0 top-0 justify-center flex items-center w-full h-screen text-center bg-black ease-in duration-300"
          }
        >
          <ul>
            <li
              onChange={navHandler}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              onChange={navHandler}
              className="p-4 text-4xl ease-in-out hover:text-gray-500"
            >
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li
              onChange={navHandler}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/products"}>Products</Link>
            </li>
            <li
              onChange={navHandler}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/card"}>Cart</Link>
            </li>
            <li
              onChange={navHandler}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/signup"}>Register</Link>
            </li>
            <li
              onChange={navHandler}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href={"/login"}>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
