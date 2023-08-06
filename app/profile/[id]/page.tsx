"use client";
import React from "react";

const UserProfile = ({ params }: any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1>UserProfile</h1>
      <p className="text-4xl m-8">
        Profile{" "}
        <span className="bg-green-500 text-black p-4 rounded-md">
          {params.id}
        </span>
      </p>
    </div>
  );
};

export default UserProfile;
