import Link from "next/link";
import React from "react";
const Hero = () => {
  return (
    <div
      className="bg-[url('https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')]
    bg-no-repeat
    bg-center bg-cover bg-fixed"
    >
      <div className=" h-screen w-full flex justify-center items-center">
        <div className="flex justify-center items-center flex-col bg-white/30 backdrop-blur-lg rounded-xl p-24">
          <h1 className="font-bold text-4xl">Saylani Fashion Store</h1>
          <p className="">Welcome To Our Fashion Store here at Saylani</p>
          <Link href={"/products"}>
            <button className="border p-4 rounded-lg hover:bg-white hover:text-black">
              Buy Products
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
