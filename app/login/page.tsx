"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const LoginPage = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(false); // [loader, setLoader
  const [buttonDisabled, setButtonDisabled] = useState(true); // [buttonDisabled, setButtonDisabled

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const loginHandler = async () => {
    // Handle sign up logic here
    try {
      setLoader(true);
      const response = await axios.post("/api/users/login/", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      // toast.success("Login success", response.data);
      // toast.success(response.data);
      <Toaster />;
      router.push("/profile");
    } catch (error: any) {
      // toast.error(error.message);
      toast.error("Login Failed", error.message);
      <Toaster />;
      // return console.log("Login failed", error.message);
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('https://plus.unsplash.com/premium_photo-1690820317284-9369ca82c397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover">
      <div className="bg-white rounded-lg  shadow-lg p-8 ">
        <h1 className="text-4xl text-gray-700 font-bold mb-6 text-center z-50">
          {loader ? "Processing..." : "Login Here"}
        </h1>
        <div className="flex flex-col space-y-4">
          <label className="text-gray-700 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="text-gray-700 border-2 border-gray-500 rounded-lg px-4 py-2 placeholder-gray-500"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="text-gray-700 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="text-gray-700 border-2 border-gray-500 rounded-lg px-4 py-2 placeholder-gray-500"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="border-2 border-gray-500 rounded-lg px-4 py-2 bg-gray-500 text-white font-bold hover:bg-gray-700 transition duration-300"
            onClick={loginHandler}
          >
            {buttonDisabled ? "Fill all fields" : "Login"}
          </button>
          <Link href="/signup">
            <p className="text-blue-700 text-center border-gray-500 rounded-lg">
              goto signup page
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
