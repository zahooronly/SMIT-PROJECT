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
      router.push("/");
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
    <div className="flex items-center justify-center min-h-screen bg-desktop bg-fixed bg-center bg-cover">
      <div className="bg-white rounded-lg  shadow-lg p-8 bg-white/40 backdrop-blur-lg">
        <h1 className="text-4xl text-pink-500 font-bold mb-6 text-center z-50">
          {loader ? "Processing..." : "Login Here"}
        </h1>
        <div className="flex flex-col space-y-4">
          <label className="text-pink-500 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="text-pink-500 border-2 border-pink-300 rounded-lg px-4 py-2 placeholder-pink-500 outline-pink-100"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="text-pink-500 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="text-pink-500 border-2 border-pink-300 rounded-lg px-4 py-2 placeholder-pink-500 outline-pink-100"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="border-2 border-pink-300 rounded-lg px-4 py-2 bg-pink-500 text-white font-bold hover:bg-pink-600 transition duration-300"
            onClick={loginHandler}
          >
            {buttonDisabled ? "Fill all fields" : "Login"}
          </button>
          <Link href="/signup">
            <p className="text-pink-700 text-center border-pink-300 rounded-lg">
              goto signup page
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
