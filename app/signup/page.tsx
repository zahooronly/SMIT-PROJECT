"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const SignupPage = () => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loader, setLoader] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const signupHandler = async () => {
    // Handle sign up logic here
    try {
      setLoader(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      toast.success("Signup success");
      // toast.success(response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast.error("Signup Failed" + error.message);
      // toast.error();
    } finally {
      setLoader(false);
    }
  };

  const router = useRouter();

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-desktop bg-cover bg-fixed bg-center">
      <Toaster />;
      <div className="bg-white rounded-lg  shadow-lg p-8 bg-white/50 backdrop-blur-lg">
        <h1 className="text-4xl text-pink-400 font-bold mb-6 text-center z-50">
          {loader ? "Loading..." : "Signup"}
        </h1>
        <div className="flex flex-col space-y-4">
          <label className="text-pink-400 font-semibold" htmlFor="username">
            Username
          </label>
          <input
            className="text-pink-400 border border-pink-500 rounded-lg px-4 py-2 placeholder-pink-500 outline-pink-100"
            type="text"
            id="username"
            placeholder="Enter your username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          />
          <label className="text-pink-400 font-semibold" htmlFor="email">
            Email
          </label>
          <input
            className="text-pink-400 border border-pink-500 rounded-lg px-4 py-2 placeholder-pink-500 outline-pink-100"
            type="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <label className="text-pink-400 font-semibold" htmlFor="password">
            Password
          </label>
          <input
            className="text-pink-400 border border-pink-500 rounded-lg px-4 py-2 placeholder-pink-500 outline-pink-100"
            type="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
          <button
            className="border-2 border-pink-500 rounded-lg px-4 py-2 bg-pink-300 text-white font-bold hover:bg-pink-500 transition duration-300"
            onClick={signupHandler}
          >
            {buttonDisabled ? "Fill all fields" : "Signup"}
          </button>
          <Link href="/login">
            <p className="text-pink-700 text-center border-pink-500 rounded-lg">
              goto login page
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
