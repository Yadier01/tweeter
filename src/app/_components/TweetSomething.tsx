import React from "react";
import { BiWorld } from "react-icons/bi";
import { CreatePost } from "./create-post";
export const TweetSomething = () => {
  return (
    <div className="mt-1 flex w-full flex-col gap-3 rounded-lg bg-white p-4 text-black">
      <h4 className=" border-b  font-semibold">Tweet something</h4>
      <div className="flex gap-1">
        <img src="/pfp.jpg" className="h-10 rounded-lg" alt="" />
        <CreatePost />
      </div>
    </div>
  );
};
