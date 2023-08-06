"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import React from "react";

const Verify = () => {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  // const router = useRouter();
  const verifyToken = async () => {
    try {
      await axios.post("/api/users/verifytoken", { token });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const tokenUrl = window.location.href.split("=")[1];
    setToken(tokenUrl || "");
  }, []);
  useEffect(() => {
    if (token.length > 0) {
      verifyToken();
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl ">Verify Token</h1>
      <h2 className="text-2xl bg-green-700">
        {token ? `${token}` : "No Token"}
      </h2>
      {verified && (
        <div>
          <h2 className="text-2xl bg-green-700">Verified</h2>
          <Link href="/login">Login</Link>
        </div>
      )}
      {error && (
        <div>
          <h2 className="text-2xl bg-red-700">Error</h2>
        </div>
      )}
    </div>
  );
};

export default Verify;
