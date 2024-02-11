"use client";
import React from "react";
import { ProfileForm } from "../register/components/Form";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#FAFAFA]">
      <div className="rounded-lg bg-white p-7">
        <div className="bg flex items-center justify-between gap-3 ">
          <img src="/tweeter.svg" alt="" />
          <h1 className=" text-xl">Login</h1>
        </div>
        <ProfileForm isLogin={true} />
        <p className="mt-3 text-gray-500">
          Don't have a account?
          <Link href="./register" className="ml-1 text-blue-500">
            Register insted.
          </Link>
        </p>
      </div>
    </div>
  );
}
